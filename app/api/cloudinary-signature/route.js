// /app/api/cloudinary-signature/route.js
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      folder: 'uploads/videos', // specify the folder
      resource_type: 'video',
    },
    process.env.CLOUDINARY_API_SECRET
  );

  return NextResponse.json({ signature, timestamp });
}
