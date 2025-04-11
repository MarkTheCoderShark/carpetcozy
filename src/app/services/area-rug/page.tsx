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
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-teal-700 text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service-area-rug.jpg" 
            alt="Beautiful clean area rug" 
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Area Rug Cleaning</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Expert care for your valuable and delicate area rugs.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Preserve the Beauty of Your Rugs" subtitle="Specialized cleaning for all types of area rugs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Gentle Cleaning for Delicate Fibers</h3>
            <p className="text-gray-700 mb-4">
              Area rugs, especially oriental, wool, silk, or antique rugs, require specialized care distinct from standard carpet cleaning. CarpetCozy offers expert area rug cleaning services that safely remove dirt, stains, and allergens while preserving the delicate fibers, intricate patterns, and vibrant colors of your valuable rugs.
            </p>
            <p className="text-gray-700 mb-6">
              Our process involves careful inspection, dust removal, gentle washing tailored to the rug type, and controlled drying to prevent damage or shrinkage. Trust our trained technicians to handle your area rugs with the utmost care and expertise.
            </p>
            <h4 className="text-xl font-semibold mb-3">Our Area Rug Cleaning Includes:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
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
      <Section title="Convenient Options Available" bgColor="gray">
         <p className="text-center text-gray-700 max-w-2xl mx-auto mb-4">For certain types of delicate rugs, we may recommend off-site cleaning at our facility for optimal results. We offer convenient pickup and delivery services for your area rugs.</p>
         <Button href="/contact?service=arearug" variant="secondary">Inquire About Pickup/Delivery</Button>
      </Section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Care for Your Cherished Rugs?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Entrust your delicate area rugs to the experts at CarpetCozy. Contact us for specialized cleaning.
          </p>
          <Button href="/contact?service=arearug" className="bg-white text-teal-600 hover:bg-gray-100" size="lg">
            Request Your Area Rug Cleaning Quote
          </Button>
        </div>
      </section>
    </>
  );
}