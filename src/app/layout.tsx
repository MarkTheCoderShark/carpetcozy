import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarpetCozy | Professional Carpet Cleaning in Roseville, CA",
  description: "Professional carpet cleaning services in Roseville and surrounding areas. Residential and commercial services, stain removal, pet odor treatment, and more.",
  keywords: "carpet cleaning, professional carpet cleaning, Roseville, Rocklin, Loomis, Folsom, stain removal, pet odor, upholstery cleaning",
  openGraph: {
    title: "CarpetCozy | Professional Carpet Cleaning in Roseville, CA",
    description: "Professional carpet cleaning services in Roseville and surrounding areas. Residential and commercial services, stain removal, pet odor treatment, and more.",
    images: [
      {
        url: '/carpetcozy.png',
        width: 1200,
        height: 630,
        alt: 'CarpetCozy Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarpetCozy | Professional Carpet Cleaning in Roseville, CA',
    description: 'Professional carpet cleaning services in Roseville and surrounding areas.',
    images: ['/carpetcozy.png'],
  },
  icons: {
    icon: '/carpetcozy.png',
    shortcut: '/carpetcozy.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#1e40af',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
