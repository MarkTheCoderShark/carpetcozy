import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Folsom Commercial Tile Cleaning | Restaurants, Gyms & More | CarpetCozy",
  description: "Professional commercial tile and grout cleaning in Folsom, CA. Specialized solutions for restaurants, gyms, medical facilities & retail spaces. Expert cleaning that maintains hygiene & appearance!",
  keywords: "commercial tile cleaning Folsom, restaurant tile cleaning Folsom, gym floor cleaning Folsom, grout cleaning Folsom, medical facility cleaning Folsom, retail tile cleaning Folsom, CarpetCozy",
};

export default function FolsomCommercialTileCleaningPage() {
  return (
    <>
      {/* Add JSON-LD Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Commercial Tile and Grout Cleaning",
          "name": "Folsom Commercial Tile and Grout Cleaning",
          "description": metadata.description,
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/folsom-commercial-tile-cleaning`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "CarpetCozy",
            "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}`
          },
          "areaServed": {
            "@type": "City",
            "name": "Folsom, California"
          },
          "potentialAction": {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/contact?service=commercial-tile&location=folsom`,
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/IOSPlatform",
                "http://schema.org/AndroidPlatform"
              ]
            },
            "result": {
              "@type": "Reservation",
              "name": "Request a Commercial Tile Cleaning Quote in Folsom"
            }
          }
        }) }}
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-blue-800 text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative h-full">
            <Image 
              src="/images/tile.jpg" 
              alt="Professional commercial tile cleaning in Folsom, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Tile Cleaning in Folsom</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Expert tile and grout cleaning for Folsom businesses, restaurants, medical facilities & gyms
          </p>
          <Button href="/contact" size="lg">Get Your Free Quote</Button>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Professional Commercial Tile Cleaning for Folsom Businesses">
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            CarpetCozy delivers premium commercial tile and grout cleaning services throughout <strong>Folsom, CA</strong>. Our expert technicians use advanced cleaning technology and industry-leading methods to maintain the cleanliness, safety, and professional appearance of your commercial tile floors.
          </p>
          <p className="mb-6">
            We understand that different businesses in Folsom have unique cleaning requirements. Whether you run a busy restaurant on East Bidwell Street, a medical facility near Mercy Hospital, or a fitness center in the Folsom Gateway shopping center, we tailor our services to meet your specific needs while working around your schedule.
          </p>
          
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Commercial Tile Services</h2>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>Restaurant kitchen cleaning</strong> with grease removal</li>
                <li><strong>Gym and fitness center</strong> floor sanitization</li>
                <li><strong>Medical facility</strong> specialized cleaning</li>
                <li><strong>Retail space</strong> maintenance programs</li>
                <li><strong>Office building</strong> common area cleaning</li>
                <li><strong>Industrial space</strong> heavy-duty cleaning</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Cleaning Solutions</h2>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>Deep grout cleaning</strong> and restoration</li>
                <li><strong>Slip-resistant treatments</strong> for safety</li>
                <li><strong>Sanitization and disinfection</strong> services</li>
                <li><strong>Stain and mineral deposit</strong> removal</li>
                <li><strong>Grout sealing</strong> for lasting protection</li>
                <li><strong>Regular maintenance</strong> programs</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Why Folsom Businesses Choose CarpetCozy</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li><strong>Local expertise</strong> with Folsom commercial properties</li>
            <li><strong>Advanced cleaning equipment</strong> for superior results</li>
            <li><strong>Flexible scheduling</strong> to minimize business disruption</li>
            <li><strong>Eco-friendly cleaning solutions</strong> available</li>
            <li><strong>Fully insured and certified</strong> technicians</li>
            <li><strong>Competitive pricing</strong> for regular maintenance</li>
          </ul>
          
          <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Serving All Folsom Commercial Districts</h3>
            <p className="mb-2">We provide commercial tile cleaning services throughout Folsom, including:</p>
            <p className="text-gray-700">Historic Folsom District, East Bidwell Street corridor, Folsom Premium Outlets, Iron Point Road business district, Prairie City Road area, and all surrounding commercial zones.</p>
          </div>
        </div>
      </Section>

      {/* Industry-Specific Solutions */}
      <Section title="Specialized Solutions for Every Industry" bgColor="alt">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Restaurants & Food Service</h3>
            <p className="text-gray-700 mb-4">
              Folsom's restaurants face unique challenges with food spills, grease, and constant foot traffic. Our specialized cleaning removes tough stains while maintaining a safe, hygienic environment for your staff and customers.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Kitchen floor deep cleaning</li>
              <li>Grease removal systems</li>
              <li>Health code compliance</li>
              <li>After-hours service</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Medical & Healthcare</h3>
            <p className="text-gray-700 mb-4">
              For Folsom's medical facilities, we provide hospital-grade cleaning and sanitization services that meet strict healthcare requirements while maintaining a professional appearance.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Hospital-grade sanitization</li>
              <li>OSHA compliance</li>
              <li>Low-VOC solutions</li>
              <li>24/7 availability</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Fitness & Recreation</h3>
            <p className="text-gray-700 mb-4">
              Folsom's gyms and fitness centers require specialized cleaning to handle heavy foot traffic, sweat, and equipment impact while maintaining a clean, motivating environment.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Non-slip treatments</li>
              <li>Moisture resistance</li>
              <li>Odor elimination</li>
              <li>Equipment-safe cleaning</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section title="Our Commercial Tile Cleaning Process">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-blue-800 font-bold">1</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Site Assessment</h3>
              <p className="text-gray-700">
                We begin with a thorough evaluation of your Folsom commercial space, identifying high-traffic areas, stains, and specific cleaning challenges. This allows us to create a customized cleaning plan that addresses your unique needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-blue-800 font-bold">2</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Pre-Treatment</h3>
              <p className="text-gray-700">
                We apply specialized solutions to break down tough stains, grease, and built-up grime. Our commercial-grade cleaners are tough on dirt but safe for your employees and customers.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-blue-800 font-bold">3</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Deep Cleaning</h3>
              <p className="text-gray-700">
                Using state-of-the-art equipment, we deep clean both tile surfaces and grout lines. Our high-pressure cleaning system removes embedded dirt while our powerful extraction prevents moisture problems.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-blue-800 font-bold">4</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Grout Protection</h3>
              <p className="text-gray-700">
                We apply professional-grade sealers to protect your grout lines from future staining and make regular maintenance easier. This step is crucial for maintaining the appearance of your commercial floors.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="dark" textColor="light">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Spotless Commercial Floors in Folsom?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join other successful Folsom businesses that trust CarpetCozy for their commercial tile cleaning needs. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get Your Free Quote
            </Button>
            <Button href="/services/commercial-tile" variant="outline" size="lg">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
} 