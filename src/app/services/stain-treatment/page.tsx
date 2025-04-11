import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Deep Stain Treatment | CarpetCozy - Roseville Stain Removal Experts",
  description: "Advanced deep stain treatment services in Roseville by CarpetCozy. We remove tough stains like wine, coffee, ink, and more from your carpets.",
  keywords: "deep stain treatment, carpet stain removal, tough stain removal, wine stain removal, coffee stain removal, ink stain removal, Roseville carpet cleaning, CarpetCozy",
};

export default function StainTreatmentServicePage() {
  return (
    <>
      {/* Add JSON-LD Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Deep Stain Treatment",
          "name": "Deep Stain Treatment",
          "description": metadata.description, // Use description from page metadata
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/services/stain-treatment`, // Absolute URL
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
               "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/contact?service=stain`, // Link to contact/quote page (specific for stain)
               "actionPlatform": [
                 "http://schema.org/DesktopWebPlatform",
                 "http://schema.org/IOSPlatform",
                 "http://schema.org/AndroidPlatform"
               ]
             },
             "result": {
               "@type": "Reservation", // Or Order/Quote
               "name": "Request Stain Removal Assessment"
             }
          }
        }) }}
      />
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-red-700 text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service-stain-treatment.jpg" 
            alt="Technician treating a tough carpet stain" 
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Deep Stain Treatment</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Tackling the toughest stains that regular cleaning can't handle.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Erase Stubborn Carpet Stains" subtitle="Advanced solutions for difficult spots">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Specialized Techniques for Tough Stains</h3>
            <p className="text-gray-700 mb-4">
              Some stains require more than just standard cleaning. CarpetCozy's Deep Stain Treatment service utilizes advanced techniques and specialized cleaning agents to target and remove stubborn stains like red wine, coffee, tea, ink, grease, rust, and more.
            </p>
            <p className="text-gray-700 mb-6">
              Our experienced technicians carefully assess the type of stain and carpet fiber to determine the most effective and safest treatment method. While not all stains are completely removable (especially if they have set for a long time or involve permanent dyes), our deep treatment significantly improves the appearance of most tough spots.
            </p>
            <h4 className="text-xl font-semibold mb-3">We Can Treat Stains Like:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Red Wine & Juice</li>
              <li>Coffee & Tea</li>
              <li>Ink & Marker</li>
              <li>Grease & Oil</li>
              <li>Blood</li>
              <li>Rust</li>
              <li>And many more...</li>
            </ul>
            <Button href="/contact?service=stain" className="mr-4">Get Stain Treatment Quote</Button>
            <Button href="/services" variant="outline">Back to Services</Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
            <Image 
              src="/images/about-team.jpg" // Consider a different stain-related image
              alt="Close up of a difficult carpet stain being treated" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Important Note Section */}
      <Section title="Important Considerations" bgColor="gray">
         <p className="text-center text-gray-700 max-w-2xl mx-auto mb-4">The success of stain removal depends on factors like the type of stain, the carpet fiber, how long the stain has been present, and any previous cleaning attempts.</p>
         <p className="text-center text-gray-700 max-w-2xl mx-auto">We always perform a spot test in an inconspicuous area first and provide an honest assessment of the likely outcome before proceeding with treatment.</p>
      </Section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Stubborn Stain?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Don't let unsightly stains detract from your carpets. Contact CarpetCozy for expert deep stain treatment.
          </p>
          <Button href="/contact?service=stain" className="bg-white text-red-600 hover:bg-gray-100" size="lg">
            Request Stain Removal Assessment
          </Button>
        </div>
      </section>
    </>
  );
}