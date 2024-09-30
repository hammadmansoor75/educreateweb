import Stripe from 'stripe'
import {headers} from 'next/headers'
import {NextResponse} from 'next/server'
import {pricingPlans} from '@/components/PricingCard'
import { db } from "@/app/helpers/server-helper";
import { stripeVariables } from '@/lib/StripeHelpers';

const stripe = new Stripe(process.env.STRIPE_API_KEY)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(req,res){
    const body = await req.text()

    const signature = headers().get('stripe-signature')
    let data;
    let event;
    let eventType;

    try{
        event = stripe.webhooks.constructEvent(body,signature,webhookSecret)
    }catch(error){
        console.error(`Webhook signature verification failed ${error.message}`)
        return NextResponse.json({error:error.message},{status:400})
    }

    data = event.data;
    eventType = event.type;

    try{
        switch(eventType){
            case 'checkout.session.completed' : {
                const session = await stripe.checkout.sessions.retrieve(
                    data.object.id,
                    {
                        expand : ['line_items']
                    }
                );

                const customerId = session?.customer
                const customer = await stripe.customers.retrieve(customerId)

                const priceId = session?.line_items.data[0]?.price.id
                const pricingPlanNames = [
                    {title : "Basic" , priceId : stripeVariables.basic},
                    {title : "Professional" , priceId : stripeVariables.professional},
                    {title : "Enterprise", priceId:stripeVariables.enterprise}
                ]

                const selectedPricingPlan = pricingPlanNames.find((plan) => plan.priceId === priceId)
                // console.log("Price Description: ", priceDesc)
                // const plan = pricingPlans.find((p) => p.priceId === priceId)

                if(!selectedPricingPlan) break;

                let user;

                if(customer.email){
                    user = await db.user.findUnique({
                        where : {email : customer.email}
                    });

                    if(!user){
                        console.error("No User Found!")
                        throw new Error("No User Found!")
                    }

                    const updatedUser = await db.user.update({
                        where : {id : user.id},
                        data : {priceId : priceId, pricingPlan:selectedPricingPlan.title,stripeCustomerId:customerId}
                    });


                }
                break;
            }
            case 'customer.subscription.deleted' : {
                const subscription = await stripe.subscriptions.retrieve(
                    data.object.id
                );

                const customerId = subscription.customer
    
                const user = await db.user.findUnique({
                    where : {stripeCustomerId : customerId}
                })

                if(!user){
                    console.error("No User Found")
                    throw new Error("No User Found")
                }

                const freePriceId = stripeVariables.basic;

                const updatedUser = await db.user.update({
                    where : {id : user.id},
                    data : {priceId : freePriceId, pricingPlan : 'Basic',stripeCustomerId:null}
                })
                break;
            }

            default:
                console.log(`Unhandled event type ${eventType}`);

        }
    }catch(error){
        console.error("stripe error: " + error.message + " | EVENT TYPE: " + eventType);
    }

    return NextResponse.json({});
}