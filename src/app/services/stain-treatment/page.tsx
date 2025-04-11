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
      {/* Hero Section - Standard Structure */}
      <section
        className="hero relative bg-cover bg-center pt-32 pb-24 min-h-[500px]" // Added padding, bg-cover, bg-center
        style={{ backgroundImage: "url('/hero.png')" }} // Use inline style for background
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

        {/* Removed the separate Image component */}
        {/* Content Container */}
        {/* Added pt-24 (header height) + extra padding */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
            Deep Stain Treatment
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary/80">
            Tackling the toughest stains that regular cleaning can't handle.
          </p>
          {/* Buttons removed for this page */}
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Erase Stubborn Carpet Stains" subtitle="Advanced solutions for difficult spots">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Specialized Techniques for Tough Stains</h3>
            <p className="text-text-primary/80 mb-4"> {/* Theme text color */}
              Some stains require more than just standard cleaning. CarpetCozy's Deep Stain Treatment service utilizes advanced techniques and specialized cleaning agents to target and remove stubborn stains like red wine, coffee, tea, ink, grease, rust, and more.
            </p>
            <p className="text-text-primary/80 mb-6"> {/* Theme text color */}
              Our experienced technicians carefully assess the type of stain and carpet fiber to determine the most effective and safest treatment method. While not all stains are completely removable (especially if they have set for a long time or involve permanent dyes), our deep treatment significantly improves the appearance of most tough spots.
            </p>
            <h4 className="text-xl font-semibold mb-3">We Can Treat Stains Like:</h4>
            <ul className="list-disc list-inside space-y-2 text-text-primary/80 mb-6"> {/* Theme text color */}
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
      <Section title="Important Considerations" bgColor="alt"> {/* Changed gray to alt */}
         <p className="text-center text-text-primary/80 max-w-2xl mx-auto mb-4">The success of stain removal depends on factors like the type of stain, the carpet fiber, how long the stain has been present, and any previous cleaning attempts.</p> {/* Theme text color */}
         <p className="text-center text-text-primary/80 max-w-2xl mx-auto">We always perform a spot test in an inconspicuous area first and provide an honest assessment of the likely outcome before proceeding with treatment.</p> {/* Theme text color */}
      </Section>

      {/* Removed extra closing Section tag */}
      {/* CTA Section - Refactored */}
      <Section bgColor="dark" textColor="light"> {/* Use dark brown bg, light text */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Stubborn Stain?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-background/80"> {/* Muted light text */}
            Don't let unsightly stains detract from your carpets. Contact CarpetCozy for expert deep stain treatment.
          </p>
          <Button href="/contact?service=stain" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90"> {/* Secondary button with light text on dark bg */}
            Request Stain Removal Assessment
          </Button>
        </div>
      </Section>
    </>
  );
}