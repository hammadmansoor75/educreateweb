import { db } from "@/app/helpers/server-helper";
import * as z from 'zod';

const DeleteCourseVideoSchema = z.object({
    courseVideoId: z.string(), // Assuming you are using UUIDs for course IDs
});

export async function DELETE(req) {
    try {
        // Step 1: Validate request body
        const data = await req.json();
        const validatedData = DeleteCourseVideoSchema.parse(data);

        // Step 2: Fetch the course with related sections and quiz questions
        

        // Step 4: Delete the course
        await db.courseVideo.delete({
            where: { id: validatedData.courseVideoId },
        });

        console.log('Course Video deleted from DB');

        return new Response(JSON.stringify({ message: 'Course video deleted successfully' }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error deleting course video :", error);
        return new Response(JSON.stringify({ error: "Failed to delete course video" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
