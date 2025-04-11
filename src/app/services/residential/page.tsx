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
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-blue-700 text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service-residential.jpg" 
            alt="Clean living room carpet" 
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Carpet Cleaning</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Bringing freshness and cleanliness back to your home carpets.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Revitalize Your Home Carpets" subtitle="Our expert residential cleaning process">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Deep Cleaning for a Healthier Home</h3>
            <p className="text-gray-700 mb-4">
              At CarpetCozy, we understand that your home is your sanctuary. Our residential carpet cleaning service is designed to thoroughly remove embedded dirt, tough stains, dust mites, and allergens that accumulate over time. We use state-of-the-art equipment and eco-friendly solutions to ensure a deep clean that's safe for your family and pets.
            </p>
            <p className="text-gray-700 mb-6">
              Regular professional cleaning not only improves the appearance of your carpets but also extends their lifespan and contributes to a healthier indoor environment by eliminating pollutants.
            </p>
            <h4 className="text-xl font-semibold mb-3">Benefits of Our Service:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
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
      <Section title="Our Proven Cleaning Steps" bgColor="gray">
         <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">We follow a meticulous process to ensure the best results for your home carpets, including inspection, pre-treatment, deep cleaning using hot water extraction, spot treatment, and efficient drying.</p>
         <div className="text-center">
           <Button href="/services#process" variant="secondary">Learn More About Our Process</Button> {/* Link to process section on main services page */}
         </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Cleaner, Fresher Carpets?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Let CarpetCozy transform your home carpets. Contact us today for a personalized quote!
          </p>
          <Button href="/contact" className="bg-white text-blue-600 hover:bg-gray-100" size="lg">
            Request Your Free Quote Now
          </Button>
        </div>
      </section>
    </>
  );
}