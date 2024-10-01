import { db } from "@/app/helpers/server-helper";
import { NextResponse } from "next/server";

// Define a handler for the GET request
export async function POST(req) {
  try {
    // Extract the userId from the query parameters or headers (depending on your auth strategy)
    const userId = await req.json(); // Adjust according to your auth mechanism

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ error: "User not authenticated" }),
        { status: 401 }
      );
    }

    // Fetch courses based on the userId
    const courses = await db.course.findMany({
      where: {
        userId: userId,
      },
      include: {
        sections: true,
        quizQuestions: true,
      },
    });

    // Transform the data to include only required fields
    const transformedCourses = courses.map((course) => ({
      courseTitle: course.courseTitle,
      courseSubtitle: course.courseSubtitle,
      sections: course.sections.length,
      quizQuestions: course.quizQuestions.length,
      courseId : course.id
    }));

    // Return the response
    return new NextResponse(JSON.stringify({ data: transformedCourses }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch courses" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
