import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '@/app/helpers/cloudinary-helper';
import { db } from "@/app/helpers/server-helper";
import { NextResponse } from 'next/server';

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads/videos',
    resource_type: 'video',
  },
});

const upload = multer({ storage: storage });

// Disable Next.js body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Middleware to handle single video file upload
const uploadMiddleware = upload.single('video');

export async function POST(req) {
  return new Promise((resolve, reject) => {
    uploadMiddleware(req, {}, async (err) => {
      if (err) {
        reject(NextResponse.json({ error: 'Upload failed' }, { status: 500 }));
      }

      if (!req.file) {
        reject(NextResponse.json({ error: 'No file uploaded' }, { status: 400 }));
      }

      const videoUrl = req.file.path;
      const { courseId } = await req.json(); // Parse JSON body to get courseId

      try {
        // Save video URL to the database
        await db.courseVideo.create({
          data: {
            courseId: courseId,
            videoUrl: videoUrl,
          },
        });

        resolve(NextResponse.json({ url: videoUrl }, { status: 200 }));
      } catch (error) {
        reject(NextResponse.json({ error: 'Failed to save video URL to database' }, { status: 500 }));
      }
    });
  });
}
