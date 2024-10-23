import {generateVideoScripts} from '@/lib/courseGeneration/generation'

export async function POST(req){
    try{
        const body = await req.json();
        const {course} = body;
        console.log(course)
        const response = await generateVideoScripts(course);
        return new Response(JSON.stringify({data : response}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }catch(error){
        console.error("Error generating scripts:", error);
        return new Response(JSON.stringify({ error: "Failed to generate scripts" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
        });
    }
}