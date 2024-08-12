
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import {useNavigation} from 'next/navigation'

export const metadata = {
  title: "Educreate ai",
  description: "",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
