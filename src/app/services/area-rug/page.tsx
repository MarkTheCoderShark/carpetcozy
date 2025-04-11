import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Area Rug Cleaning | CarpetCozy - Delicate Rug Care Roseville",
  description: "Specialized area rug cleaning services in Roseville by CarpetCozy. Safe and effective cleaning for wool, silk, oriental, and antique rugs.",
  keywords: "area rug cleaning, rug cleaning, oriental rug cleaning, wool rug cleaning, silk rug cleaning, Roseville rug cleaning, CarpetCozy",
};

export default function AreaRugServicePage() {
  return (
    <>
      {/* Add JSON-LD Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Area Rug Cleaning",
          "name": "Area Rug Cleaning",
          "description": metadata.description, // Use description from page metadata
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/services/area-rug`, // Absolute URL
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
               "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/contact?service=arearug`, // Link to contact/quote page (specific for area rug)
               "actionPlatform": [
                 "http://schema.org/DesktopWebPlatform",
                 "http://schema.org/IOSPlatform",
                 "http://schema.org/AndroidPlatform"
               ]
             },
             "result": {
               "@type": "Reservation", // Or Order/Quote
               "name": "Request Your Area Rug Cleaning Quote"
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
                Area Rug Cleaning
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Expert care for your valuable and delicate area rugs.
              </p>
            </div> {/* Close relative z-10 div */}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Preserve the Beauty of Your Rugs" subtitle="Specialized cleaning for all types of area rugs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Gentle Cleaning for Delicate Fibers</h3>
            <p className="text-text-primary/80 mb-4"> {/* Theme text color */}
              Area rugs, especially oriental, wool, silk, or antique rugs, require specialized care distinct from standard carpet cleaning. CarpetCozy offers expert area rug cleaning services that safely remove dirt, stains, and allergens while preserving the delicate fibers, intricate patterns, and vibrant colors of your valuable rugs.
            </p>
            <p className="text-text-primary/80 mb-6"> {/* Theme text color */}
              Our process involves careful inspection, dust removal, gentle washing tailored to the rug type, and controlled drying to prevent damage or shrinkage. Trust our trained technicians to handle your area rugs with the utmost care and expertise.
            </p>
            <h4 className="text-xl font-semibold mb-3">Our Area Rug Cleaning Includes:</h4>
            <ul className="list-disc list-inside space-y-2 text-text-primary/80 mb-6"> {/* Theme text color */}
              <li>Cleaning for Wool, Silk, Cotton, Synthetic rugs.</li>
              <li>Special care for Oriental, Persian, and Antique rugs.</li>
              <li>Thorough dusting and dirt removal.</li>
              <li>Gentle, fiber-specific washing techniques.</li>
              <li>Stain and odor treatment.</li>
              <li>Controlled drying environment.</li>
              <li>Optional fringe cleaning and repair.</li>
            </ul>
            <Button href="/contact?service=arearug" className="mr-4">Get Area Rug Quote</Button>
            <Button href="/services" variant="outline">Back to Services</Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
            <Image 
              src="/images/our-story.jpg" // Consider a different rug-related image
              alt="Technician inspecting an oriental area rug" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Pickup/Delivery Option (Optional) */}
      <Section title="Convenient Options Available" bgColor="alt"> {/* Changed gray to alt */}
         <p className="text-center text-text-primary/80 max-w-2xl mx-auto mb-4">For certain types of delicate rugs, we may recommend off-site cleaning at our facility for optimal results. We offer convenient pickup and delivery services for your area rugs.</p> {/* Theme text color */}
         <div className="text-center"><Button href="/contact?service=arearug" variant="secondary">Inquire About Pickup/Delivery</Button></div> {/* Centered button */}
      </Section>
      {/* Removed extra closing Section tag */}

      {/* CTA Section - Refactored */}
      <Section bgColor="dark" textColor="light"> {/* Use dark brown bg, light text */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Care for Your Cherished Rugs?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-background/80"> {/* Muted light text */}
            Entrust your delicate area rugs to the experts at CarpetCozy. Contact us for specialized cleaning.
          </p>
          <Button href="/contact?service=arearug" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90"> {/* Secondary button with light text on dark bg */}
            Request Your Area Rug Cleaning Quote
          </Button>
        </div>
      </Section>
    </>
  );
}