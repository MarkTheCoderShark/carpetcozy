import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Commercial Carpet Cleaning | CarpetCozy - Roseville Businesses",
  description: "Professional commercial carpet cleaning for offices, retail spaces, and businesses in Roseville. Maintain a clean and professional environment with CarpetCozy.",
  keywords: "commercial carpet cleaning, office carpet cleaning, business carpet cleaning, carpet cleaning Roseville, CarpetCozy",
};

export default function CommercialServicePage() {
  return (
    <>
      {/* Add JSON-LD Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Commercial Carpet Cleaning",
          "name": "Commercial Carpet Cleaning",
          "description": metadata.description, // Use description from page metadata
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/services/commercial`, // Absolute URL
          "provider": {
            "@type": "LocalBusiness",
            "name": "CarpetCozy",
            "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}` // Link back to the main business ID
          },
          "areaServed": { // Define general service area
             "@type": "Place",
             "name": "Roseville and surrounding areas"
          },
          "potentialAction": {
             "@type": "ReserveAction", // Or OrderAction/QuoteAction
             "target": {
               "@type": "EntryPoint",
               "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/contact?service=commercial`, // Link to contact/quote page (specific for commercial)
               "actionPlatform": [
                 "http://schema.org/DesktopWebPlatform",
                 "http://schema.org/IOSPlatform",
                 "http://schema.org/AndroidPlatform"
               ]
             },
             "result": {
               "@type": "Reservation", // Or Order/Quote
               "name": "Request a Commercial Quote"
             }
          }
        }) }}
      />
      {/* Hero Section - Standard Structure */}
      <section className="hero relative h-[60vh] min-h-[500px] flex"> {/* Removed items-center */}
        <div className="absolute inset-0 z-0">
          {/* Main background image */}
          <div className="relative h-full">
            <Image
              src="/hero.png" // Use the new hero image
              alt="CarpetCozy Hero Background" // Updated alt text
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Added pt-24 (header height) + extra padding */}
        <div className="container mx-auto px-4 z-10 flex justify-center text-center items-center pt-32">
          {/* Added relative positioning for overlay */}
          <div className="relative max-w-4xl mx-auto p-8 rounded-lg text-text-primary">
            {/* Added overlay */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg"></div>
            {/* Added relative z-10 to text content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Commercial Carpet Cleaning
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Professional cleaning solutions to keep your business looking its best.
              </p>
            </div> {/* Close relative z-10 div */}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Maintain a Professional Image" subtitle="Reliable carpet cleaning for your business">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <h3 className="text-2xl font-bold mb-4">Expert Cleaning for Offices & Retail Spaces</h3>
            <p className="text-text-primary/80 mb-4"> {/* Theme text color */}
              First impressions matter in business. CarpetCozy provides top-tier commercial carpet cleaning services tailored to the unique needs of offices, retail stores, restaurants, and other commercial properties in the Roseville area. We understand the importance of minimizing disruption to your operations.
            </p>
            <p className="text-text-primary/80 mb-6"> {/* Theme text color */}
              Our powerful cleaning technology effectively removes heavy foot traffic dirt, spills, and grime, ensuring your carpets are clean, presentable, and contribute to a healthier environment for your employees and customers. We offer flexible scheduling, including after-hours and weekends.
            </p>
            <h4 className="text-xl font-semibold mb-3">Why Choose CarpetCozy for Your Business:</h4>
            <ul className="list-disc list-inside space-y-2 text-text-primary/80 mb-6"> {/* Theme text color */}
              <li>Enhances your business's professional appearance.</li>
              <li>Removes tough dirt from high-traffic areas.</li>
              <li>Improves indoor air quality for staff and clients.</li>
              <li>Flexible scheduling to minimize business disruption.</li>
              <li>Customized cleaning plans available.</li>
              <li>Competitive pricing for commercial accounts.</li>
            </ul>
            <Button href="/contact?service=commercial" className="mr-4">Request a Commercial Quote</Button>
            <Button href="/services" variant="outline">Back to Services</Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
            <Image 
              src="/images/about-hero.jpg" // Consider a different commercial-related image
              alt="Professional office environment" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Industries Served (Optional) */}
      <Section title="Serving Various Industries" bgColor="alt"> {/* Changed gray to alt */}
         <p className="text-center text-text-primary/80 max-w-2xl mx-auto mb-8">We provide commercial carpet cleaning for a wide range of businesses, including offices, retail stores, medical facilities, educational institutions, hospitality venues, and more.</p> {/* Theme text color */}
         {/* Maybe add logos or icons here later */}
      </Section>

      {/* CTA Section - Refactored */}
      <Section bgColor="dark" textColor="light"> {/* Use dark brown bg, light text */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Elevate Your Business Environment?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-background/80"> {/* Muted light text */}
            Ensure your commercial space reflects professionalism. Contact CarpetCozy for reliable carpet cleaning services.
          </p>
          <Button href="/contact?service=commercial" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90"> {/* Secondary button with light text on dark bg */}
            Get Your Commercial Quote Today
          </Button>
        </div>
      </Section>
    </>
  );
}