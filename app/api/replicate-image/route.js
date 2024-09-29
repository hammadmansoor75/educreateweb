import { generateReplicateImage } from "@/app/helpers/replicate";

export async function POST(req,res){
    try{
        const body = await req.json();
        const {prompt} = body;
        const outputResponse = await generateReplicateImage(prompt);
        console.log(outputResponse[0]);
        return new Response(JSON.stringify({message : "Image Generated!", imageUrls : outputResponse}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
    }catch(error){
        console.log(error)
        return new Response(JSON.stringify({message : "Something went wrong", error : error}), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
    }
}