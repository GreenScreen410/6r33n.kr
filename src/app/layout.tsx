import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "6R33N",
  description:
    "Personal site of Mingyu Jung — a developer who occasionally designs.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
