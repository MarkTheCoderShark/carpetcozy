import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Upholstery Cleaning | CarpetCozy - Furniture Cleaning Roseville",
  description: "Professional upholstery cleaning services in Roseville by CarpetCozy. Clean sofas, chairs, ottomans, and other furniture to remove dirt, stains, and allergens.",
  keywords: "upholstery cleaning, furniture cleaning, sofa cleaning, chair cleaning, fabric cleaning, Roseville upholstery cleaning, CarpetCozy",
};

export default function UpholsteryServicePage() {
  return (
    <>
      {/* Add JSON-LD Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Upholstery Cleaning",
          "name": "Upholstery Cleaning",
          "description": metadata.description, // Use description from page metadata
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/services/upholstery`, // Absolute URL
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
               "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/contact?service=upholstery`, // Link to contact/quote page (specific for upholstery)
               "actionPlatform": [
                 "http://schema.org/DesktopWebPlatform",
                 "http://schema.org/IOSPlatform",
                 "http://schema.org/AndroidPlatform"
               ]
             },
             "result": {
               "@type": "Reservation", // Or Order/Quote
               "name": "Request Your Upholstery Cleaning Quote"
             }
          }
        }) }}
      />
      {/* Hero Section - Standard Structure */}
      <section
        className="hero relative bg-cover bg-center pt-32 pb-24 min-h-[500px]" // Added padding, bg-cover, bg-center
        style={{ backgroundImage: "url('/images/upholstery.jpg')" }} // Use inline style for background
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

        {/* Removed the separate Image component */}
        {/* Content Container */}
        {/* Added pt-24 (header height) + extra padding */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
            Upholstery Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary/80">
            Revive your furniture and restore its original beauty.
          </p>
          {/* Buttons removed for this page */}
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Refresh Your Furniture" subtitle="Gentle yet effective cleaning for all types of upholstery">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Extend the Life of Your Upholstery</h3>
            <p className="text-text-primary/80 mb-4"> {/* Theme text color */}
              Your furniture is a significant investment and often the centerpiece of your living spaces. CarpetCozy's professional upholstery cleaning service safely and effectively cleans sofas, chairs, sectionals, ottomans, and other upholstered items, removing accumulated dirt, body oils, dust, allergens, and stains.
            </p>
            <p className="text-text-primary/80 mb-6"> {/* Theme text color */}
              We carefully inspect the fabric type (natural fibers, synthetics, blends) to determine the most appropriate cleaning method, whether it's hot water extraction or a low-moisture process. Our cleaning helps preserve the fabric's integrity, color, and texture, extending the life of your furniture.
            </p>
            <h4 className="text-xl font-semibold mb-3">Benefits of Upholstery Cleaning:</h4>
            <ul className="list-disc list-inside space-y-2 text-text-primary/80 mb-6"> {/* Theme text color */}
              <li>Removes dirt, dust, and allergens trapped in fabric.</li>
              <li>Eliminates stains and spots.</li>
              <li>Neutralizes odors.</li>
              <li>Restores fabric color and vibrancy.</li>
              <li>Extends the lifespan of your furniture.</li>
              <li>Safe for various fabric types.</li>
            </ul>
            <Button href="/contact?service=upholstery" className="mr-4">Get Upholstery Quote</Button>
            <Button href="/services" variant="outline">Back to Services</Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/images/upholstery.jpg"
              alt="Technician cleaning upholstery on a chair" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Fabric Types Section */}
      <Section title="We Clean Various Fabric Types" bgColor="alt"> {/* Changed gray to alt */}
         <p className="text-center text-text-primary/80 max-w-2xl mx-auto mb-8">Our technicians are trained to handle a wide range of upholstery fabrics, including cotton, linen, wool, microfiber, polyester, nylon, and blends. We always test for colorfastness before proceeding.</p> {/* Theme text color */}
      </Section>
      {/* Removed extra closing Section tag */}

      {/* CTA Section - Refactored */}
      <Section bgColor="dark" textColor="light"> {/* Use dark brown bg, light text */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Give Your Furniture a New Lease on Life?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-background/80"> {/* Muted light text */}
            Contact CarpetCozy today for professional upholstery cleaning and enjoy fresher, cleaner furniture.
          </p>
          <Button href="/contact?service=upholstery" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90"> {/* Secondary button with light text on dark bg */}
            Request Your Upholstery Cleaning Quote
          </Button>
        </div>
      </Section>
    </>
  );
}