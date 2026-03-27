import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";
import PageCurtain from "@/components/PageCurtain";
import NoiseOverlay from "@/components/NoiseOverlay";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Muslim Digital Agency",
  description: "High-performance GSAP Scrollytelling & Digital Sanctuary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        <NoiseOverlay />
        <CustomCursor />
        {/* <PageCurtain /> */}
        {/* <Navbar /> */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
