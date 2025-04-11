import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Rocklin Upholstery Cleaning | Couch & Fabric Cleaning | CarpetCozy",
  description: "Professional upholstery cleaning in Rocklin, CA. Safe cleaning for couches, chairs, and fabrics. Keep your furniture fresh and clean for your family & pets.",
  keywords: "upholstery cleaning Rocklin, couch cleaner Rocklin, fabric cleaning Rocklin CA, furniture cleaning Rocklin, sofa cleaning Rocklin",
};

export default function RocklinUpholsteryCleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-blue-800 text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative h-full">
            <Image 
              src="/images/service-upholstery.jpg" // Use upholstery image
              alt="Professional upholstery cleaning in Rocklin, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rocklin Upholstery Cleaning</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Revive your furniture with our expert upholstery cleaning services, safe for Rocklin families and pets.
          </p>
          <Button href="/contact" size="lg">Get an Upholstery Cleaning Quote</Button>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Refresh Your Furniture in Rocklin">
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            Your furniture is a central part of your Rocklin home. Over time, sofas, chairs, and other upholstered items collect dirt, dust, oils, and allergens. CarpetCozy provides professional upholstery cleaning services throughout Rocklin to restore the beauty and freshness of your furniture.
          </p>
          <p className="mb-6">
            We understand the importance of <strong className="font-semibold">safe cleaning methods for your family and pets</strong>. Our technicians use gentle, yet effective, cleaning solutions specifically designed for various upholstery fabrics. We have the expertise to clean your furniture safely in Rocklin.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Rocklin Upholstery Cleaning Includes:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>Pre-inspection to determine fabric type and cleaning method</li>
            <li>Pre-treatment of spots and stains</li>
            <li>Gentle cleaning using appropriate techniques (steam or low-moisture)</li>
            <li>Extraction of dirt, allergens, and cleaning solution</li>
            <li>Optional fabric protector application to guard against future spills</li>
            <li>Careful handling of all furniture types</li>
          </ul>
          <p className="mb-6">
            Extend the life of your favorite furniture and create a healthier indoor environment with CarpetCozy's upholstery cleaning services in Rocklin.
          </p>
          <div className="text-center mt-8">
             <Button href="/contact" variant="primary" size="lg">Clean Your Furniture Today</Button>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Love Your Furniture Again!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free quote for professional upholstery cleaning in Rocklin. Contact CarpetCozy now!
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            size="lg"
          >
            Request Your Free Upholstery Quote
          </Button>
        </div>
      </section>
    </>
  );
}