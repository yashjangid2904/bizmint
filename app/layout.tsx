import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import SecretAdminTrigger from "@/components/SecretAdminTrigger";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bizmint.co.in"),
  title: {
    default: "Bizmint LLP | Premium Business Advisory & Compliance",
    template: "%s | Bizmint LLP",
  },
  description:
    "Bizmint LLP provides expert regulatory advisory, company registration, and compliance services for businesses and investors across India.",
  keywords: [
    "business advisory",
    "company registration",
    "compliance services",
    "GST registration",
    "LLP registration",
    "private limited company",
    "NBFC registration",
    "ROC filing",
    "Bizmint LLP",
  ],
  authors: [{ name: "Bizmint LLP", url: "https://bizmint.co.in" }],
  creator: "Bizmint LLP",
  publisher: "Bizmint LLP",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bizmint.co.in",
    siteName: "Bizmint LLP",
    title: "Bizmint LLP | Premium Business Advisory & Compliance",
    description:
      "Expert regulatory advisory, company registration, and compliance services for businesses and investors across India.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Bizmint LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bizmint LLP | Premium Business Advisory & Compliance",
    description:
      "Expert regulatory advisory, company registration, and compliance services for businesses and investors across India.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bizmint.co.in",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bizmint LLP",
  url: "https://bizmint.co.in",
  logo: "https://bizmint.co.in/logo.png",
  description:
    "Bizmint LLP provides expert regulatory advisory, company registration, and compliance services for businesses and investors across India.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bizmint LLP",
  url: "https://bizmint.co.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://bizmint.co.in/services?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
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
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
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
