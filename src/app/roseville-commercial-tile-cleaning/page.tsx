import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Commercial Tile & Grout Cleaning in Roseville | CarpetCozy",
  description: "Expert commercial tile and grout cleaning for Roseville businesses, restaurants, medical facilities & gyms. Professional, reliable service from CarpetCozy.",
  keywords: "commercial tile cleaning Roseville, restaurant tile cleaning Roseville, gym floor cleaning Roseville, grout cleaning Roseville, tile cleaning Roseville CA, CarpetCozy",
};

export default function RosevilleCommercialTileServicePage() {
  return (
    <>
      {/* Add JSON-LD Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Commercial Tile and Grout Cleaning",
          "name": "Commercial Tile and Grout Cleaning in Roseville",
          "description": metadata.description,
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/roseville-commercial-tile-cleaning`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "CarpetCozy",
            "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}`
          },
          "areaServed": {
             "@type": "Place",
             "name": "Roseville, California"
          },
          "potentialAction": {
             "@type": "ReserveAction",
             "target": {
               "@type": "EntryPoint",
               "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/contact?service=commercial-tile&location=roseville`,
               "actionPlatform": [
                 "http://schema.org/DesktopWebPlatform",
                 "http://schema.org/IOSPlatform",
                 "http://schema.org/AndroidPlatform"
               ]
             },
             "result": {
               "@type": "Reservation",
               "name": "Request a Commercial Tile Cleaning Quote in Roseville"
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
            Commercial Tile Cleaning in Roseville
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary/80">
            Expert tile and grout cleaning for Roseville businesses, restaurants, medical facilities & gyms
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Specialized Commercial Tile Cleaning in Roseville" subtitle="Keep your Roseville business floors pristine and hygienic">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <h3 className="text-2xl font-bold mb-4">Expert Solutions for Roseville Businesses</h3>
            <p className="text-text-primary/80 mb-4">
              Roseville's commercial spaces, from restaurants in the Galleria area to medical facilities near Kaiser Permanente, require specialized tile and grout cleaning to maintain hygiene standards and appearance. CarpetCozy provides industry-leading commercial tile cleaning services tailored to the unique demands of high-traffic, spill-prone environments throughout Roseville.
            </p>
            <p className="text-text-primary/80 mb-6">
              Our advanced cleaning technology effectively removes grease, grime, bacteria, and stubborn stains from tile surfaces and grout lines. We use professional-grade cleaners that are tough on dirt but safe for your customers, staff, and the environment. Our services are designed to minimize disruption to your business operations with flexible scheduling options.
            </p>
            <h4 className="text-xl font-semibold mb-3">Benefits for Your Roseville Business:</h4>
            <ul className="list-disc list-inside space-y-2 text-text-primary/80 mb-6">
              <li>Improves facility appearance and customer perception</li>
              <li>Enhances safety by reducing slip hazards</li>
              <li>Removes harmful bacteria and improves hygiene</li>
              <li>Extends the life of your tile investment</li>
              <li>Restores grout lines to their original appearance</li>
              <li>Customized maintenance plans available</li>
            </ul>
            <Button href="/contact?service=commercial-tile&location=roseville" className="mr-4">Request a Quote</Button>
            <Button href="/services/commercial-tile" variant="outline">Learn More About Our Services</Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
            <img 
              src="/images/tile.jpg"
              alt="Professional tile cleaning in a Roseville commercial space" 
              className="object-cover w-full h-full"
              loading="eager"
            />
          </div>
        </div>
      </Section>

      {/* Industry-Specific Solutions */}
      <Section title="Industry-Specific Solutions for Roseville Businesses" bgColor="alt">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-text-primary">Restaurant & Food Service</h3>
            <p className="text-text-primary/80 mb-4">
              Roseville's restaurants and food service businesses face unique challenges with food spills, grease, and constant foot traffic. Our specialized cleaning removes tough stains while maintaining a safe, hygienic environment for your staff and customers.
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
              Roseville's fitness centers require specialized cleaning to handle heavy foot traffic, sweat, and equipment impact. Our sanitizing process maintains a clean, motivating environment for your members.
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
              For Roseville's medical facilities, we provide hospital-grade cleaning and sanitization services that meet strict healthcare requirements while maintaining a professional appearance.
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
      <Section title="Our Commercial Tile Cleaning Process in Roseville">
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-primary text-text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Assessment & Customization</h3>
              <p className="text-text-primary/80">We begin with a thorough evaluation of your Roseville commercial space, identifying high-traffic areas, stains, and specific cleaning challenges. This allows us to create a customized cleaning plan that addresses your unique needs.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary text-text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Pre-Treatment & Preparation</h3>
              <p className="text-text-primary/80">We apply specialized solutions to break down tough stains, grease, and built-up grime. Our commercial-grade cleaners are tough on dirt but safe for your employees and customers.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary text-text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Advanced Cleaning & Extraction</h3>
              <p className="text-text-primary/80">Using state-of-the-art equipment, we deep clean both tile surfaces and grout lines. Our high-pressure cleaning system removes embedded dirt while our powerful extraction prevents moisture problems.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary text-text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">4</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Grout Sealing (Optional)</h3>
              <p className="text-text-primary/80">We apply professional-grade sealers to protect your grout lines from future staining and make regular maintenance easier. This step is crucial for maintaining the appearance of your commercial floors.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary text-text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">5</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Final Inspection & Maintenance Plan</h3>
              <p className="text-text-primary/80">We conduct a thorough inspection to ensure all areas meet our quality standards. We'll also provide recommendations for ongoing maintenance to keep your Roseville business's tile surfaces looking their best between professional cleanings.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="dark" textColor="light">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Spotless Commercial Floors in Roseville?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-background/80">
            Join other successful Roseville businesses that trust CarpetCozy for their commercial tile cleaning needs. Contact us today for a free consultation and quote.
          </p>
          <Button href="/contact?service=commercial-tile&location=roseville" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90">
            Schedule Your Consultation
          </Button>
        </div>
      </Section>
    </>
  );
} 