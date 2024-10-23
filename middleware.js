// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//   // Redirect to sign-in page if no token
//   if (!token) {
//     return NextResponse.redirect(new URL("/signIn", req.url));
//   }

//   return NextResponse.next();
// }

// // Protect specific routes
// export const config = {
//   matcher: ["/contentcreation", "/mylearning"],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import {NextResponse} from 'next/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/(.*)', '/about(/*)','/course-quiz(/*)', '/examples(/*)', '/pricing(/*)'])
const isProtected = createRouteMatcher(['/mylearning', '/mycourses', '/contentcreation', '/edit-course'])

export default clerkMiddleware((auth, request) => {
  if (isProtected(request)) {
    auth().protect()
  }
  return NextResponse.next();
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};