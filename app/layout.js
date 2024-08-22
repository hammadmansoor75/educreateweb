
import { Inter } from "next/font/google";
import {Open_Sans} from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
const sans = Open_Sans({subsets:["latin"]})
import {useNavigation} from 'next/navigation'
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
export const metadata = {
  title: "Educreate ai",
  description: "",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={sans.className}>
        <main>
          {children}
        </main>
        <Toaster/>
      </body>
    </html>
  );
}
