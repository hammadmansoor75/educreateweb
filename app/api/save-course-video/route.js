import { db } from "@/app/helpers/server-helper";
import * as z from 'zod'

const CourseVideoSchema = z.object({
    courseId : z.string(),
    scripts : z.array(z.string()),
    videoUrl : z.string()
})


export async function POST(req) {
    try{
        const data = await req.json();
        console.log("Recieved Data: ", data)
        const validatedData = CourseVideoSchema.parse(data);
        console.log(validatedData)
        const courseVideo = await db.courseVideo.create({
            data : {
                courseId : validatedData.courseId,
                scripts : validatedData.scripts,
                videoUrl : validatedData.videoUrl        
            }
        })

        if(courseVideo){
            console.log('Course Video saved to DB')
        }

        return new Response(JSON.stringify({data : courseVideo}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
    }catch(error){
        console.error("Error saving course video :", error);
        return new Response(JSON.stringify({ error: "Failed to generate text" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
        });
    }
}