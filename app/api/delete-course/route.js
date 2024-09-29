import { db } from "@/app/helpers/server-helper";
import * as z from 'zod';

const DeleteCourseSchema = z.object({
    courseId: z.string(), // Assuming you are using UUIDs for course IDs
});

export async function DELETE(req) {
    try {
        // Step 1: Validate request body
        const data = await req.json();
        const validatedData = DeleteCourseSchema.parse(data);

        // Step 2: Fetch the course with related sections and quiz questions
        const courseToDelete = await db.course.findUnique({
            where: { id: validatedData.courseId },
            include: {
                sections: true,
                quizQuestions: true,
            },
        });

        if (!courseToDelete) {
            return new Response(JSON.stringify({ error: "Course not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Step 3: Delete related sections and quiz questions
        await Promise.all([
            db.section.deleteMany({
                where: {
                    id: { in: courseToDelete.sections.map(section => section.id) },
                },
            }),
            db.quizQuestion.deleteMany({
                where: {
                    id: { in: courseToDelete.quizQuestions.map(q => q.id) },
                },
            }),
        ]);

        // Step 4: Delete the course
        await db.course.delete({
            where: { id: validatedData.courseId },
        });

        console.log('Course and related data deleted from DB');

        return new Response(JSON.stringify({ message: 'Course and related data deleted successfully' }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error deleting course and related data:", error);
        return new Response(JSON.stringify({ error: "Failed to delete course and related data" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
