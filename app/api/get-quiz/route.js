import { db } from "@/app/helpers/server-helper";
import { NextResponse } from "next/server";

// Define a handler for the POST request
export async function POST(req) {
  try {
    // Extract the course ID from the request body
    const { id } = await req.json();

    if (!id) {
      return new NextResponse(
        JSON.stringify({ error: "Course ID is required" }),
        { status: 400 }
      );
    }

    // Fetch quiz questions related to the course from the database
    const quizQuestions = await db.quizQuestion.findMany({
      where: { courseId: id }, // Assuming courseId is the foreign key
    });

    if (!quizQuestions || quizQuestions.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: "No quiz questions found for this course" }),
        { status: 404 }
      );
    }

    // Return the quiz questions data as JSON
    return new NextResponse(
      JSON.stringify({ quizQuestions: quizQuestions }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch quiz questions" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
