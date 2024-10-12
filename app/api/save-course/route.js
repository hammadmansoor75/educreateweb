import { db } from "@/app/helpers/server-helper";
import * as z from 'zod'


const CourseSchema = z.object({
    courseTitle: z.string(),
    courseSubtitle: z.string(),
    courseImageUrl: z.string().optional(),
    sections: z.array(z.object({
      sectionTitle: z.string(),
      keyPoints: z.array(z.string()),
      smallPara: z.string(),
      stableDiffusionPrompts: z.array(z.string()),
      previewImages: z.array(z.string()).optional(),
      backgroundImageUrl: z.string().optional(),
      x: z.number(),
      rndComponentImage : z.string(),
      y: z.number(),
      width: z.number(),
      height: z.number(),
    })),
    quizQuestions: z.array(z.object({
      question: z.string(),
      answer: z.string(),
      options: z.array(z.string()),
    })),
    createdBy : z.string().optional(),
  });

export async function POST(req){
    try{
        const data = await req.json();
        const validatedData = CourseSchema.parse(data);

        const course = await db.course.create({
            data: {
              courseTitle: validatedData.courseTitle,
              courseSubtitle: validatedData.courseSubtitle,
              courseImageUrl: validatedData.courseImageUrl,
              userId: validatedData.createdBy,
              sections: {
                create: validatedData.sections.map(section => ({
                  sectionTitle: section.sectionTitle,
                  keyPoints: section.keyPoints,
                  smallPara: section.smallPara,
                  stableDiffusionPrompts: section.stableDiffusionPrompts,
                  previewImages: section.previewImages || [],
                  backgroundImageUrl: section.backgroundImageUrl,
                  rndComponentImage : section.rndComponentImage,
                  x: section.x,
                  y: section.y,
                  width: section.width,
                  height: section.height,
                })),
              },
              quizQuestions: {
                create: validatedData.quizQuestions.map(q => ({
                  question: q.question,
                  answer: q.answer,
                  options: q.options,
                })),
              },
            },
          });

        if(course){
            console.log('Course saved to DB: ', course)
        }

        return new Response(JSON.stringify({data : course.id}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
    }catch(error){
        console.error("Error saving course :", error);
        return new Response(JSON.stringify({ error: "Error saving course" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
        });
    }
}