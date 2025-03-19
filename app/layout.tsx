import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../components/layout/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The World's Largest Hackathon",
  description: "Join the global community of innovators and problem solvers in the world's largest hackathon event with over $1M in prizes.",
  keywords: ["hackathon", "coding", "programming", "innovation", "global", "tech", "competition"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
