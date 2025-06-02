import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SessonWraper from "./Components/sessonWraper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai - Fund For Me",
  description: "Get Me A Chai - Collet A Fund For Me To Enjoy A Life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
<head>
  <meta httpEquiv="Permissions-Policy" content="otp-credentials=()" />
  
</head>

     <body className=" min-h-screen w-full">
        <SessonWraper>
      <Navbar/>
    <div className="flex min-h-screen h-full  text-white bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <main className="flex-1 ">
        {children}
      </main>
        </div>
        <Footer />
         
        </SessonWraper>
      </body>
    </html>
  );
}
