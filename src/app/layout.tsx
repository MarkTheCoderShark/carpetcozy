import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google"; // Import Poppins and Roboto
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configure Roboto for body text
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Include weights needed
  display: 'swap', // Ensure text remains visible during font load
});

// Configure Poppins for headings
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"], // Include weights needed for headings
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CarpetCozy | Professional Carpet Cleaning in Roseville & Surrounding Areas",
  description: "Professional carpet cleaning services in Roseville and surrounding areas. Residential and commercial services, stain removal, pet odor treatment, and more.",
  keywords: "carpet cleaning, professional carpet cleaning, Roseville, Rocklin, Loomis, Folsom, stain removal, pet odor, upholstery cleaning",
  openGraph: {
    title: "CarpetCozy | Professional Carpet Cleaning in Roseville & Surrounding Areas",
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
    title: 'CarpetCozy | Professional Carpet Cleaning in Roseville & Surrounding Areas',
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
        {/* Add JSON-LD Schema Markup for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com',
            "name": "CarpetCozy",
            "description": metadata.description, // Use description from metadata
            "potentialAction": { // Helps define site search capabilities
              "@type": "SearchAction",
              "target": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/search?q={search_term_string}`, // Adjust if you have site search
              "query-input": "required name=search_term_string"
            }
          }) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body
        className={`${roboto.variable} ${poppins.variable} antialiased min-h-screen flex flex-col`} // Add both font variables
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
