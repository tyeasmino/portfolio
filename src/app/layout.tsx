import '@fontsource/poppins/900.css'; // ExtraBold
import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400"], // can add "700" if you want bold
});

export const metadata: Metadata = {
  title: "Tamima Yeasmin",
  description: "Portfolio of Tamima Yeasmin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancing.variable} antialiased bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}
      >

        <div className="sticky top-0 z-50  backdrop-blur-lg bg-opacity-70 dark:bg-opacity-70">
          <div className="container mx-auto py-2">
            <Navbar />
          </div>
        </div>
        <div className="container mx-auto py-2">
          {children}
        </div>
      </body>

    </html >
  );
}
