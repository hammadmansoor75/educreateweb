import { generateCourse } from "@/lib/courseGeneration/generation";
import * as z from 'zod'
import { db } from "@/app/helpers/server-helper";

const formSchema = z.object({
    courseTitle : z.string().min(10, "Course Title is required"),
    courseSubtitle : z.string().min(10, "Course Subtitle is required"),
    learningOptions : z.string(),
    courseLength : z.string(),
    wordiness : z.string(),
    courseLevel : z.string(),
    styleTone : z.string(),
    file: z.any().optional(),
})



export async function POST(req,res) {
     
    try {
       
        // const session = await getServerSession(req,null,authOptions)
        // if(!session){
        //     return new Response(JSON.stringify({ error: "Unauthorized" }), {
        //         status: 401,
        //         headers: { "Content-Type": "application/json" },
        //         });
        // }
        const body = await req.json()
        const {courseTitle,courseSubtitle,learningOptions,courseLength,wordiness,courseLevel,styleTone,file,userId} = body;
        console.log('User Id: ', userId)
        // const text = extractTextFromPDF(file)
        const formData = {
            courseTitle : courseTitle,
            courseSubtitle : courseSubtitle,
            learningOptions : learningOptions,
            courseLength : courseLength,
            wordiness : wordiness,
            courseLevel : courseLevel,
            styleTone : styleTone,
            file : file,
        }
        const response = await generateCourse(formData);
        // console.log(response.courseTitle);
        // console.log(response.courseSubtitle);
        // console.log(response.sections);
        
        return new Response(JSON.stringify({data : response}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
    } catch (error) {
        console.error("Error generating text:", error);
        return new Response(JSON.stringify({ error: "Failed to generate text" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
        });
    }
}