import { NextResponse } from "next/server";
import axios from 'axios'
import { generateQuizFeedback } from "@/lib/courseGeneration/generation";
export async function POST(req,res){
    const {prompt} = await req.json();

    try{
        prompt.toString();
        const chatGPTFeedback = await generateQuizFeedback(prompt);
        // console.log("Chatgpt feedback: ",chatGPTFeedback)
        return new NextResponse(
            JSON.stringify({ feedback: chatGPTFeedback }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );

    }catch(error){
        console.error("Error fetching feedback:", error);
        return new NextResponse(
        JSON.stringify({ error: "Something went wrong!" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}