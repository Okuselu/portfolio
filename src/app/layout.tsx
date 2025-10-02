import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "../styles/components/animations.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Your Portfolio | Full Stack Developer",
  description: "A modern portfolio showcasing my projects and skills as a full stack developer",
  keywords: ["portfolio", "developer", "react", "nextjs", "typescript"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Your Portfolio | Full Stack Developer",
    description: "A modern portfolio showcasing my projects and skills as a full stack developer",
    siteName: "Your Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Portfolio | Full Stack Developer",
    description: "A modern portfolio showcasing my projects and skills as a full stack developer",
    creator: "@yourusername",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
