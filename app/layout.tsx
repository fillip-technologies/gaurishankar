import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BelpatraRain } from "@/components/effects/BelpatraRain";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shri GauriShankar Baikunthnath Dham",
  description:
    "Official website of Shri GauriShankar Baikunthnath Dham for darshan, aarti, seva, gallery, and temple updates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <BelpatraRain />
      </body>
    </html>
  );
}
