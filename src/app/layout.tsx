import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google"; // Import both fonts
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configure Poppins font for headings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap',
});

// Configure Open Sans font for body text
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | CarpetCozy - Professional Carpet Cleaning in Roseville',
    default: 'CarpetCozy - Professional Carpet Cleaning in Roseville',
  },
  description: 'Professional carpet cleaning services in Roseville and surrounding areas. Eco-friendly solutions for residential and commercial cleaning needs.',
  keywords: 'carpet cleaning, professional cleaning, Roseville, eco-friendly, pet stain removal, upholstery cleaning, commercial carpet cleaning',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com',
    siteName: 'CarpetCozy',
    title: 'CarpetCozy - Professional Carpet Cleaning in Roseville',
    description: 'Professional carpet cleaning services in Roseville and surrounding areas. Eco-friendly solutions for residential and commercial cleaning needs.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/carpetcozy.png`,
        width: 1200,
        height: 630,
        alt: 'CarpetCozy Professional Carpet Cleaning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarpetCozy | Professional Carpet Cleaning in Roseville & Surrounding Areas',
    description: 'Professional carpet cleaning services in Roseville and surrounding areas.',
    images: ['/logo.png'], // Updated path
  },
  icons: {
    icon: '/logo.png', // Updated path
    shortcut: '/logo.png', // Updated path
    apple: '/apple-touch-icon.png', // Keep apple touch icon if it exists
  },
  manifest: '/manifest.json',
  // themeColor: '#b7e3f5', // Update theme color to new primary (optional, consider viewport instead)
};

// Define viewport for theme color and other settings
export const viewport = {
  themeColor: '#b7e3f5', // Use new primary color
}

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
        {/* Manifest link is usually handled by metadata, but keep if needed */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
        {/* Apple touch icon link is handled by metadata */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        {/* Theme color meta tag is handled by viewport export */}
        {/* <meta name="theme-color" content="#b7e3f5" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CarpetCozy",
              "image": "https://carpetcozy.com/carpetcozy.png",
              "@id": "https://carpetcozy.com",
              "url": "https://carpetcozy.com",
              "telephone": "(555) 123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Roseville",
                "addressRegion": "CA",
                "postalCode": "95678",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.7521,
                "longitude": -121.2880
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/carpetcozy",
                "https://www.instagram.com/carpetcozy"
              ],
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body
        // Apply Poppins and Open Sans font variables and base styles
        className={`${poppins.variable} ${openSans.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-text-primary`} 
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
