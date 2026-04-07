import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-futura-alt",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UH AI Hackathon | IEEE-NSM",
  description: "Innovate. Compete. Solve. Join the premier AI competition at the University of Houston hosted by IEEE-NSM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen font-sans flex flex-col">{children}</body>
    </html>
  );
}
