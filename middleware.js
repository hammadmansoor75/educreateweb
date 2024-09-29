import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Redirect to sign-in page if no token
  if (!token) {
    return NextResponse.redirect(new URL("/signIn", req.url));
  }

  return NextResponse.next();
}

// Protect specific routes
export const config = {
  matcher: ["/contentcreation", "/mylearning"],
};
