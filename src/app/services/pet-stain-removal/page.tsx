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
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-green-700 text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service-pet-stain.jpg" 
            alt="Happy dog on a clean carpet" 
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pet Stain & Odor Removal</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Specialized solutions for homes with furry family members.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Say Goodbye to Pet Accidents" subtitle="Effective treatments for stains and odors">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Targeted Cleaning for Pet Messes</h3>
            <p className="text-gray-700 mb-4">
              We love our pets, but accidents happen. CarpetCozy offers specialized pet stain and odor removal services designed to tackle the unique challenges pet messes present. Urine, feces, and vomit stains require specific treatments to break down proteins and neutralize odors effectively.
            </p>
            <p className="text-gray-700 mb-6">
              Our technicians use powerful, pet-safe enzymatic cleaners that penetrate deep into carpet fibers to eliminate stains and the odor-causing bacteria at their source, rather than just masking the smell. Keep your carpets fresh and your home healthy for everyone, including your four-legged friends.
            </p>
            <h4 className="text-xl font-semibold mb-3">Our Pet Treatment Process:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
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
              src="/images/team-1.jpg" // Consider a different pet-related image
              alt="Technician treating a pet stain on carpet" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Why Professional Treatment? */}
      <Section title="Why DIY Isn't Always Enough" bgColor="gray">
         <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">While store-bought cleaners can sometimes help with surface stains, pet urine can soak deep into the carpet padding and subfloor. Our professional equipment and solutions reach these deeper layers to fully eliminate stains and odors, preventing long-term damage and lingering smells.</p>
      </Section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Restore Freshness to Your Home?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Don't let pet accidents ruin your carpets. Contact CarpetCozy for effective stain and odor removal.
          </p>
          <Button href="/contact?service=pet" className="bg-white text-green-600 hover:bg-gray-100" size="lg">
            Book Your Pet Treatment Today
          </Button>
        </div>
      </section>
    </>
  );
}