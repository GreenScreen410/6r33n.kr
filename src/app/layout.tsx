import type { Metadata } from "next";
import { Geist, Fragment_Mono } from "next/font/google";
import "./globals.css";
import { CursorMark } from "@/components/CursorMark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "6R33N - Information for All",
  description:
    "Personal site of Mingyu Jung — a developer who occasionally designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CursorMark />
      </body>
    </html>
  );
}
