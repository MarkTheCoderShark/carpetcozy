import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Pet Stain & Odor Removal | CarpetCozy - Roseville Pet Owners",
  description: "Expert pet stain and odor removal services in Roseville by CarpetCozy. Eliminate tough pet accidents and odors from your carpets effectively and safely.",
  keywords: "pet stain removal, pet odor removal, carpet cleaning pets, pet accident cleaning, Roseville carpet cleaning, CarpetCozy",
};

export default function PetStainServicePage() {
  return (
    <>
      {/* Add JSON-LD Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Pet Stain & Odor Removal",
          "name": "Pet Stain & Odor Removal",
          "description": metadata.description, // Use description from page metadata
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/services/pet-stain-removal`, // Absolute URL
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
               "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/contact?service=pet`, // Link to contact/quote page (specific for pet)
               "actionPlatform": [
                 "http://schema.org/DesktopWebPlatform",
                 "http://schema.org/IOSPlatform",
                 "http://schema.org/AndroidPlatform"
               ]
             },
             "result": {
               "@type": "Reservation", // Or Order/Quote
               "name": "Get Pet Treatment Quote"
             }
          }
        }) }}
      />
      {/* Hero Section - Standard Structure */}
      <section
        className="hero relative bg-cover bg-center pt-32 pb-24 min-h-[500px]" // Added padding, bg-cover, bg-center
        style={{ backgroundImage: "url('/images/pet.webp')" }} // Use inline style for background
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

        {/* Removed the separate Image component */}
        {/* Content Container */}
        {/* Added pt-24 (header height) + extra padding */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
            Pet Stain & Odor Removal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary/80">
            Specialized solutions for homes with furry family members.
          </p>
          {/* Buttons removed for this page */}
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Say Goodbye to Pet Accidents" subtitle="Effective treatments for stains and odors">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Targeted Cleaning for Pet Messes</h3>
            <p className="text-text-primary/80 mb-4"> {/* Theme text color */}
              We love our pets, but accidents happen. CarpetCozy offers specialized pet stain and odor removal services designed to tackle the unique challenges pet messes present. Urine, feces, and vomit stains require specific treatments to break down proteins and neutralize odors effectively.
            </p>
            <p className="text-text-primary/80 mb-6"> {/* Theme text color */}
              Our technicians use powerful, pet-safe enzymatic cleaners that penetrate deep into carpet fibers to eliminate stains and the odor-causing bacteria at their source, rather than just masking the smell. Keep your carpets fresh and your home healthy for everyone, including your four-legged friends.
            </p>
            <h4 className="text-xl font-semibold mb-3">Our Pet Treatment Process:</h4>
            <ul className="list-disc list-inside space-y-2 text-text-primary/80 mb-6"> {/* Theme text color */}
              <li>Identifies affected areas using specialized tools.</li>
              <li>Applies powerful enzymatic pre-treatment.</li>
              <li>Utilizes deep extraction to remove contaminants.</li>
              <li>Neutralizes odors at the molecular level.</li>
              <li>Safe for pets and children after drying.</li>
              <li>Helps prevent recurring accidents in the same spot.</li>
            </ul>
            <Button href="/contact?service=pet" className="mr-4">Get Pet Treatment Quote</Button>
            <Button href="/services" variant="outline">Back to Services</Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/images/pet.webp"
              alt="Technician treating a pet stain on carpet" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Why Professional Treatment? */}
      <Section title="Why DIY Isn't Always Enough" bgColor="alt"> {/* Changed gray to alt */}
         <p className="text-center text-text-primary/80 max-w-2xl mx-auto mb-8">While store-bought cleaners can sometimes help with surface stains, pet urine can soak deep into the carpet padding and subfloor. Our professional equipment and solutions reach these deeper layers to fully eliminate stains and odors, preventing long-term damage and lingering smells.</p> {/* Theme text color */}
      </Section>

      {/* CTA Section - Refactored */}
      <Section bgColor="dark" textColor="light"> {/* Use dark brown bg, light text */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Restore Freshness to Your Home?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-background/80"> {/* Muted light text */}
            Don't let pet accidents ruin your carpets. Contact CarpetCozy for effective stain and odor removal.
          </p>
          <Button href="/contact?service=pet" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90"> {/* Secondary button with light text on dark bg */}
            Book Your Pet Treatment Today
          </Button>
        </div>
      </Section>
    </>
  );
}