import { Inter } from "next/font/google";
import {Open_Sans} from 'next/font/google'
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const sans = Open_Sans({subsets:["latin"]})
import { Toaster } from "@/components/ui/toaster";
import {CourseProvider} from '@/providers/CourseProvider'
import {ClerkProvider} from '@clerk/nextjs'

export const metadata = {
  title: "Educreate ai",
  description: "",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={sans.className}>
        <ClerkProvider>
          <CourseProvider>
          <main>
            {children}
          </main>
          <Toaster/>
          </CourseProvider>
        </ClerkProvider>
        
      </body>
    </html>
  );
}
