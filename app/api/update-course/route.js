import { db } from "@/app/helpers/server-helper";
import * as z from 'zod';

const CourseSchema = z.object({
  courseId: z.string(),
  courseTitle: z.string(),
  courseSubtitle: z.string(),
  courseImageUrl: z.string().optional(),
  sections: z.array(z.object({
    id: z.string().optional(), // Add id for updating existing sections
    sectionTitle: z.string(),
    keyPoints: z.array(z.string()),
    smallPara: z.string(),
    stableDiffusionPrompts: z.array(z.string()),
    previewImages: z.array(z.string()).optional(),
    backgroundImageUrl: z.string().optional(),
    rndComponentImage : z.string().optional(),
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number(),
  })),
  quizQuestions: z.array(z.object({
    id: z.string().optional(), // Add id for updating existing questions
    question: z.string(),
    answer: z.string(),
    options: z.array(z.string()),
  })),
  updatedBy: z.string().optional(),
});

export async function PUT(req) {
  try {
    const data = await req.json();
    const validatedData = CourseSchema.parse(data);

    const course = await db.course.update({
      where: { id: validatedData.courseId },
      data: {
        courseTitle: validatedData.courseTitle,
        courseSubtitle: validatedData.courseSubtitle,
        courseImageUrl: validatedData.courseImageUrl,
        updatedBy: validatedData.updatedBy,
        sections: {
          upsert: validatedData.sections.map(section => ({
            where: { id: section.id || '' }, // If section has an id, use it to update; otherwise, create a new section
            update: {
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
            },
            create: {
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
            },
          })),
        },
        quizQuestions: {
          upsert: validatedData.quizQuestions.map(q => ({
            where: { id: q.id || '' }, // If question has an id, use it to update; otherwise, create a new question
            update: {
              question: q.question,
              answer: q.answer,
              options: q.options,
            },
            create: {
              question: q.question,
              answer: q.answer,
              options: q.options,
            },
          })),
        },
      },
    });

    if (course) {
      console.log('Course updated in DB');
    }

    return new Response(JSON.stringify({ data: course.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating course:", error);
    return new Response(JSON.stringify({ error: "Failed to update course" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
