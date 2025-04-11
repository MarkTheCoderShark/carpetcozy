import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Residential Carpet Cleaning | CarpetCozy - Roseville Homes",
  description: "Professional residential carpet cleaning services in Roseville. Revitalize your home carpets, remove dirt, stains, and allergens for a healthier living space.",
  keywords: "residential carpet cleaning, home carpet cleaning, carpet cleaning Roseville, stain removal, allergen removal, CarpetCozy",
};

export default function ResidentialServicePage() {
  return (
    <>
      {/* Add JSON-LD Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Residential Carpet Cleaning",
          "name": "Residential Carpet Cleaning",
          "description": metadata.description, // Use description from page metadata
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/services/residential`, // Absolute URL
          "provider": {
            "@type": "LocalBusiness",
            "name": "CarpetCozy",
            "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}` // Link back to the main business ID
          },
          "areaServed": { // Define general service area, can be refined
             "@type": "Place",
             "name": "Roseville and surrounding areas" // Match general description
             // Or list specific areas if desired:
             // "@type": "AdministrativeArea",
             // "name": ["Roseville", "Rocklin", "Loomis", "Folsom", "Citrus Heights", "Granite Bay", "Auburn", "Grass Valley", "Orangevale", "El Dorado Hills"]
          },
          "potentialAction": {
             "@type": "ReserveAction", // Or OrderAction/QuoteAction
             "target": {
               "@type": "EntryPoint",
               "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/contact`, // Link to contact/quote page
               "actionPlatform": [
                 "http://schema.org/DesktopWebPlatform",
                 "http://schema.org/IOSPlatform",
                 "http://schema.org/AndroidPlatform"
               ]
             },
             "result": {
               "@type": "Reservation", // Or Order/Quote
               "name": "Request a Free Quote"
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
            Residential Carpet Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary/80">
            Bringing freshness and cleanliness back to your home carpets.
          </p>
          {/* Buttons removed for this page */}
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Revitalize Your Home Carpets" subtitle="Our expert residential cleaning process">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Deep Cleaning for a Healthier Home</h3>
            <p className="text-text-primary/80 mb-4"> {/* Theme text color */}
              At CarpetCozy, we understand that your home is your sanctuary. Our residential carpet cleaning service is designed to thoroughly remove embedded dirt, tough stains, dust mites, and allergens that accumulate over time. We use state-of-the-art equipment and eco-friendly solutions to ensure a deep clean that's safe for your family and pets.
            </p>
            <p className="text-text-primary/80 mb-6"> {/* Theme text color */}
              Regular professional cleaning not only improves the appearance of your carpets but also extends their lifespan and contributes to a healthier indoor environment by eliminating pollutants.
            </p>
            <h4 className="text-xl font-semibold mb-3">Benefits of Our Service:</h4>
            <ul className="list-disc list-inside space-y-2 text-text-primary/80 mb-6"> {/* Theme text color */}
              <li>Removes deep-seated dirt and grime.</li>
              <li>Eliminates allergens, dust mites, and bacteria.</li>
              <li>Treats and removes common household stains.</li>
              <li>Restores carpet texture and appearance.</li>
              <li>Uses safe, non-toxic cleaning solutions.</li>
              <li>Extends the life of your carpets.</li>
            </ul>
            <Button href="/contact" className="mr-4">Get a Free Quote</Button>
            <Button href="/services" variant="outline">Back to Services</Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/images/hero-carpet.jpg" // Consider using a different relevant image
              alt="Close up of clean residential carpet" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Process Snippet (Optional) */}
      <Section title="Our Proven Cleaning Steps" bgColor="alt"> {/* Changed gray to alt */}
         <p className="text-center text-text-primary/80 max-w-2xl mx-auto mb-8">We follow a meticulous process to ensure the best results for your home carpets, including inspection, pre-treatment, deep cleaning using hot water extraction, spot treatment, and efficient drying.</p> {/* Theme text color */}
         <div className="text-center">
           <Button href="/services#process" variant="secondary">Learn More About Our Process</Button> {/* Link to process section on main services page */}
         </div>
      </Section>

      {/* CTA Section - Refactored */}
      <Section bgColor="dark" textColor="light"> {/* Use dark brown bg, light text */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Cleaner, Fresher Carpets?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-background/80"> {/* Muted light text */}
            Let CarpetCozy transform your home carpets. Contact us today for a personalized quote!
          </p>
          <Button href="/contact" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90"> {/* Secondary button with light text on dark bg */}
            Request Your Free Quote Now
          </Button>
        </div>
      </Section>
    </>
  );
}