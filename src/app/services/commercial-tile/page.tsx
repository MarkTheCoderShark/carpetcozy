import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Commercial Tile & Grout Cleaning | CarpetCozy - Restaurants, Gyms & More",
  description: "Specialized commercial tile and grout cleaning for restaurants, gyms, medical facilities and businesses in Greater Sacramento. Keep your facilities hygienic and spotless with CarpetCozy.",
  keywords: "commercial tile cleaning, restaurant tile cleaning, gym floor cleaning, grout cleaning, tile cleaning Sacramento, CarpetCozy",
};

export default function CommercialTileServicePage() {
  return (
    <>
      {/* Add JSON-LD Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Commercial Tile and Grout Cleaning",
          "name": "Commercial Tile and Grout Cleaning",
          "description": metadata.description,
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/services/commercial-tile`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "CarpetCozy",
            "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}`
          },
          "areaServed": {
             "@type": "Place",
             "name": "Greater Sacramento area"
          },
          "potentialAction": {
             "@type": "ReserveAction",
             "target": {
               "@type": "EntryPoint",
               "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/contact?service=commercial-tile`,
               "actionPlatform": [
                 "http://schema.org/DesktopWebPlatform",
                 "http://schema.org/IOSPlatform",
                 "http://schema.org/AndroidPlatform"
               ]
             },
             "result": {
               "@type": "Reservation",
               "name": "Request a Commercial Tile Cleaning Quote"
             }
          }
        }) }}
      />
      {/* Hero Section */}
      <section
        className="hero relative bg-cover bg-center pt-32 pb-24 min-h-[500px]"
        style={{ backgroundImage: "url('/images/tile.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
            Commercial Tile & Grout Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary/80">
            Professional solutions for restaurants, gyms, and high-traffic commercial spaces.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Specialized Commercial Tile Cleaning" subtitle="Keep your business floors pristine and hygienic">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <h3 className="text-2xl font-bold mb-4">Expert Solutions for Demanding Environments</h3>
            <p className="text-text-primary/80 mb-4">
              Commercial spaces like restaurants, gyms, and medical facilities require specialized tile and grout cleaning to maintain hygiene standards and appearance. CarpetCozy provides industry-leading commercial tile cleaning services tailored to the unique demands of high-traffic, spill-prone environments in the Greater Sacramento area.
            </p>
            <p className="text-text-primary/80 mb-6">
              Our advanced cleaning technology effectively removes grease, grime, bacteria, and stubborn stains from tile surfaces and grout lines. We use professional-grade cleaners that are tough on dirt but safe for your customers, staff, and the environment. Our services are designed to minimize disruption to your business operations with flexible scheduling options.
            </p>
            <h4 className="text-xl font-semibold mb-3">Benefits for Your Business:</h4>
            <ul className="list-disc list-inside space-y-2 text-text-primary/80 mb-6">
              <li>Improves facility appearance and customer perception</li>
              <li>Enhances safety by reducing slip hazards</li>
              <li>Removes harmful bacteria and improves hygiene</li>
              <li>Extends the life of your tile investment</li>
              <li>Restores grout lines to their original appearance</li>
              <li>Customized maintenance plans available</li>
            </ul>
            <Button href="/contact?service=commercial-tile" className="mr-4">Request a Quote</Button>
            <Button href="/services" variant="outline">Back to Services</Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
            <img 
              src="/images/tile.jpg"
              alt="Professional tile cleaning in a commercial space" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </Section>

      {/* Industry-Specific Solutions */}
      <Section title="Industry-Specific Solutions" bgColor="alt">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-text-primary">Restaurant & Food Service</h3>
            <p className="text-text-primary/80 mb-4">
              Kitchens and dining areas face constant food spills, grease buildup, and heavy foot traffic. Our specialized cleaning removes stubborn stains and eliminates bacteria and odors, helping you maintain health code compliance and a clean dining environment.
            </p>
            <ul className="list-disc list-inside space-y-1 text-text-primary/80 mb-4">
              <li>Kitchen floor deep cleaning</li>
              <li>Dining area tile maintenance</li>
              <li>Grout sealing for easier maintenance</li>
              <li>After-hours service available</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-text-primary">Fitness Centers & Gyms</h3>
            <p className="text-text-primary/80 mb-4">
              Gym floors endure constant moisture, sweat, and heavy equipment use. Our sanitizing tile cleaning process is designed to remove grime buildup, eliminate odor-causing bacteria, and maintain a clean, healthy environment for your members.
            </p>
            <ul className="list-disc list-inside space-y-1 text-text-primary/80 mb-4">
              <li>Locker room sanitization</li>
              <li>Workout area floor cleaning</li>
              <li>Slip-resistance treatment options</li>
              <li>Scheduled maintenance programs</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-text-primary">Medical & Healthcare</h3>
            <p className="text-text-primary/80 mb-4">
              Medical facilities require the highest standards of cleanliness. Our hospital-grade cleaning protocols remove contaminants and sanitize surfaces, helping you maintain compliance with health regulations and ensuring patient safety.
            </p>
            <ul className="list-disc list-inside space-y-1 text-text-primary/80 mb-4">
              <li>Waiting room deep cleaning</li>
              <li>Procedure room sanitization</li>
              <li>Bathroom tile disinfection</li>
              <li>Low-odor cleaning solutions</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Our Process */}
      <Section title="Our Commercial Tile Cleaning Process">
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-primary text-text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Assessment & Customization</h3>
              <p className="text-text-primary/80">We begin with a thorough inspection of your tile surfaces to identify problem areas, stains, and damage. Then we create a customized cleaning plan tailored to your specific industry needs and schedule requirements.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary text-text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Pre-Treatment & Preparation</h3>
              <p className="text-text-primary/80">We apply specialized pre-treatment solutions designed to break down oils, grease, and built-up grime. For particularly stubborn areas, we use targeted spot treatments to maximize cleaning effectiveness.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary text-text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Advanced Cleaning & Extraction</h3>
              <p className="text-text-primary/80">Using commercial-grade equipment with high-pressure hot water extraction, we deep clean tile surfaces and grout lines. Our powerful vacuum extraction removes dirt, bacteria, and cleaning solution, leaving surfaces cleaner and drier.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary text-text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">4</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Grout Sealing (Optional)</h3>
              <p className="text-text-primary/80">For maximum protection, we recommend professional grout sealing after cleaning. This creates a barrier against future stains, makes regular maintenance easier, and extends the life of your grout.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary text-text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">5</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Final Inspection & Maintenance Plan</h3>
              <p className="text-text-primary/80">We conduct a thorough inspection to ensure all areas meet our quality standards. We'll also provide recommendations for ongoing maintenance to keep your tile surfaces looking their best between professional cleanings.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="dark" textColor="light">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Spotless Commercial Floors?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-background/80">
            Keep your business environment clean, safe and professional. Contact CarpetCozy today for specialized commercial tile cleaning services.
          </p>
          <Button href="/contact?service=commercial-tile" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90">
            Schedule Your Consultation
          </Button>
        </div>
      </Section>
    </>
  );
} 