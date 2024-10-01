import { db } from "@/app/helpers/server-helper";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import * as z from 'zod'

const userSchema = z.object({
    firstName : z.string().min(3,'First Name is required'),
    lastName : z.string().min(3,"Last Name is required"),
    email : z.string().email('Invalid Email Address'),
    password : z.string().min(1,'Password is required').min(6,'Password must have 6 characters'),
    confirmPassword:  z.string().min(1,'Password confirmation is required')
})

export async function POST(req){
    try {
        const body = await req.json();
        const {firstName,lastName, email, password} = userSchema.parse(body);
        console.log(firstName,lastName,email,password)
        const existingUserByEmail = await db.user.findUnique({
            where : {
                email : email
            }
        })
        if(existingUserByEmail){
            return NextResponse.json({user : null, message:"User with this email already exists!"},{status : 409})
        }
        const hashedPassword = await hash(password,10);
        const newUser = await db.user.create({
            data : {
                firstName,
                lastName,
                email,
                hashedPassword,
                stripeCustomerId : null
            }
        })

        const {hashedPassword : newUserPassword, ...rest} = newUser;
        return NextResponse.json({user : rest, message:"User created Successfully"}, {status : 201});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message : "Something went wrong" , error : error}, {status : 400})
    }
}