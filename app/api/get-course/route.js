import { db } from "@/app/helpers/server-helper";
import { NextResponse } from "next/server";

// Define a handler for the POST request
export async function POST(req) {
  try {
    // Extract the ID directly from req.body
    const { id } = await req.json();

    if (!id) {
      return new NextResponse(
        JSON.stringify({ error: "Course ID is required" }),
        { status: 400 }
      );
    }

    // Fetch the course data from the database
    const course = await db.course.findUnique({
      where: { id: id },
      include: {
        sections: true,
        quizQuestions: true,
      },
    });

    if (!course) {
      return new NextResponse(
        JSON.stringify({ error: "Course not found" }),
        { status: 404 }
      );
    }

    // Return the course data as JSON
    console.log(course);
    return new NextResponse(
      JSON.stringify({ course: course }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching course:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch course" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
