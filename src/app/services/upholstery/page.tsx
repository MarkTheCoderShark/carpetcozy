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
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-purple-700 text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service-upholstery.jpg" 
            alt="Clean sofa upholstery" 
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upholstery Cleaning</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Revive your furniture and restore its original beauty.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Refresh Your Furniture" subtitle="Gentle yet effective cleaning for all types of upholstery">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Extend the Life of Your Upholstery</h3>
            <p className="text-gray-700 mb-4">
              Your furniture is a significant investment and often the centerpiece of your living spaces. CarpetCozy's professional upholstery cleaning service safely and effectively cleans sofas, chairs, sectionals, ottomans, and other upholstered items, removing accumulated dirt, body oils, dust, allergens, and stains.
            </p>
            <p className="text-gray-700 mb-6">
              We carefully inspect the fabric type (natural fibers, synthetics, blends) to determine the most appropriate cleaning method, whether it's hot water extraction or a low-moisture process. Our cleaning helps preserve the fabric's integrity, color, and texture, extending the life of your furniture.
            </p>
            <h4 className="text-xl font-semibold mb-3">Benefits of Upholstery Cleaning:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
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
              src="/images/team-2.jpg" // Consider a different upholstery-related image
              alt="Technician cleaning upholstery on a chair" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Fabric Types Section */}
      <Section title="We Clean Various Fabric Types" bgColor="gray">
         <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">Our technicians are trained to handle a wide range of upholstery fabrics, including cotton, linen, wool, microfiber, polyester, nylon, and blends. We always test for colorfastness before proceeding.</p>
      </Section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Give Your Furniture a New Lease on Life?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Contact CarpetCozy today for professional upholstery cleaning and enjoy fresher, cleaner furniture.
          </p>
          <Button href="/contact?service=upholstery" className="bg-white text-purple-600 hover:bg-gray-100" size="lg">
            Request Your Upholstery Cleaning Quote
          </Button>
        </div>
      </section>
    </>
  );
}