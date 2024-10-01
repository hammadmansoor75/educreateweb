import { db } from "@/app/helpers/server-helper";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const { courseId } = await req.json();
        if (!courseId) {
            return new NextResponse(
              JSON.stringify({ error: "Course ID is required" }),
              { status: 400 }
            );
        }

        const courseVideo = await db.courseVideo.findUnique({
            where : {courseId : courseId}
        })

        if (!courseVideo) {
            return new NextResponse(
              JSON.stringify({ message: "Course Video not found" }),
              { status: 200 }
            );
        }

        console.log("Course Video: ",courseVideo);
        return new NextResponse(
        JSON.stringify({ courseVideo: courseVideo }),
        { status: 200, headers: { "Content-Type": "application/json" } }
        );


    }catch(error){
        console.error("Error fetching course:", error);
        return new NextResponse(
        JSON.stringify({ error: "Failed to fetch course video" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}