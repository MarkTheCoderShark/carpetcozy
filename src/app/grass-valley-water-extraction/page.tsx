import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Emergency Water Extraction Grass Valley | 24/7 Service | CarpetCozy",
  description: "Fast emergency water extraction and carpet drying services in Grass Valley, CA. 24/7 response for water damage cleanup in homes and businesses. Call now!",
  keywords: "emergency water extraction Grass Valley, emergency carpet drying Grass Valley, water damage cleanup Grass Valley, flood cleanup Grass Valley, 24/7 water extraction Grass Valley",
};

export default function GrassValleyWaterExtractionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-red-800 text-white flex items-center"> {/* Red for urgency */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative h-full">
            {/* Consider a relevant water damage/extraction image */}
            <Image 
              src="/images/service-stain-treatment.jpg" // Placeholder image, replace if better one exists
              alt="Emergency water extraction services in Grass Valley, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Emergency Water Extraction in Grass Valley</h1>
          <p className="text-2xl font-semibold mb-4">Available 24/7 - Call Us Immediately!</p> {/* Add phone number if available */}
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Fast response for water damage emergencies in Grass Valley homes and businesses. We minimize damage and dry your carpets quickly.
          </p>
          {/* Consider adding a clickable phone number button */}
          <Button href="/contact" size="lg" className="bg-white text-red-700 hover:bg-gray-100">Request Emergency Service</Button>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Rapid Water Removal & Drying in Grass Valley">
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            Water damage requires immediate action to prevent further issues like mold growth and structural damage. CarpetCozy offers <strong className="font-semibold">24/7 emergency water extraction</strong> and drying services for homes and businesses throughout Grass Valley, CA.
          </p>
          <p className="mb-6">
            Whether you've experienced a burst pipe, appliance leak, or flooding, our rapid response team is ready to help. We arrive quickly with powerful extraction equipment to remove standing water from your carpets and affected areas. Our process is designed to mitigate damage and begin the drying process as soon as possible in Grass Valley.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-red-700">Our Grass Valley Emergency Water Extraction Services:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li><strong className="font-semibold">24/7 Emergency Response:</strong> We're available day or night for water damage emergencies in Grass Valley.</li>
            <li><strong className="font-semibold">Fast Water Removal:</strong> High-powered truck-mounted and portable extraction units.</li>
            <li><strong className="font-semibold">Carpet and Pad Drying:</strong> Industrial air movers and dehumidifiers to thoroughly dry affected areas.</li>
            <li><strong className="font-semibold">Damage Assessment:</strong> We assess the extent of the water damage.</li>
            <li><strong className="font-semibold">Mold Prevention:</strong> Application of anti-microbial treatments if necessary.</li>
            <li><strong className="font-semibold">Service for Homes & Businesses:</strong> We handle both residential and commercial water damage cleanup.</li>
          </ul>
          <p className="mb-6 font-semibold text-red-600">
            If you have a water emergency in Grass Valley, don't wait! Call CarpetCozy immediately to minimize damage.
          </p>
          <div className="text-center mt-8">
             {/* Consider adding a prominent phone number here */}
             <Button href="/contact" variant="primary" size="lg" className="bg-red-600 hover:bg-red-700">Contact Us for Emergency Help</Button>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16"> {/* Red for urgency */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Water Damage Emergency in Grass Valley?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Call CarpetCozy 24/7 for immediate water extraction and drying services.
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-red-700 hover:bg-gray-100"
            size="lg"
          >
            Get Emergency Help Now
          </Button>
        </div>
      </section>
    </>
  );
}