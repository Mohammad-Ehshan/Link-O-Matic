"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./dashboard/_components/Footer";
import Header from "./dashboard/_components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>LinkOMatic - Turn URLs into Cinematic AI Videos</title>
          <meta
            name="description"
            content="Transform any article or blog URL into professional videos with AI-generated scripts, voiceovers, and visuals."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={inter.className}>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
