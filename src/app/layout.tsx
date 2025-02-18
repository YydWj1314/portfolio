import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YYD | Personal Website",  // title of the webpage bar
  description: "YYD is a beginner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
        bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
        >

        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"> 
        </div>

        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 right-[-35rem] 
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]
        md:left-[-33rem] lg:left-[-28rem] x1:left-[-15rem] 2xl:left-[-5rem]"> 
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
