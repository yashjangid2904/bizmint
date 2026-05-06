import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import SecretAdminTrigger from "@/components/SecretAdminTrigger";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bizmint LLP | Premium Business Advisory & Compliance",
  description: "Bizmint LLP provides expert regulatory advisory, company registration, and compliance services for businesses and investors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-black">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <SecretAdminTrigger />
      </body>
    </html>
  );
}
