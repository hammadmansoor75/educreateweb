import { db } from "@/app/helpers/server-helper";
import { NextResponse } from "next/server";

// Define a handler for the POST request
export async function POST(req) {
  try {
    // Extract the ID directly from req.body
    const { clerkId } = await req.json();

    if (!clerkId) {
      return new NextResponse(
        JSON.stringify({ error: "Clerk ID is required" }),
        { status: 400 }
      );
    }

    // Fetch the course data from the database
    const user = await db.user.findUnique({
      where : {
        clerkId: clerkId
      }
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({ error: "User not found" }),
        { status: 404 }
      );
    }

    // Return the course data as JSON
    console.log(user);
    return new NextResponse(
      JSON.stringify({ user: user }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch user" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
