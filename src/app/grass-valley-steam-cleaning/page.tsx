import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Grass Valley Steam Cleaning Services | Hot Water Extraction | CarpetCozy",
  description: "Eco-friendly steam carpet cleaning (hot water extraction) in Grass Valley, CA. Deep clean carpets, remove allergens & pet stains safely. Get your free quote!",
  keywords: "steam cleaning Grass Valley CA, eco-friendly steam carpet cleaning Grass Valley, Grass Valley hot water extraction, deep carpet cleaning Grass Valley, non-toxic carpet cleaning Grass Valley",
};

export default function GrassValleySteamCleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-blue-800 text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative h-full">
            {/* Consider a relevant steam cleaning image */}
            <Image 
              src="/images/cleaning-process.jpg" // Placeholder image, replace if better one exists
              alt="Professional steam cleaning (hot water extraction) in Grass Valley, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Grass Valley Steam Cleaning (Hot Water Extraction)</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            The most effective deep cleaning method for carpets, recommended by manufacturers. Safe for Grass Valley families and pets.
          </p>
          <Button href="/contact" size="lg">Get a Steam Cleaning Quote</Button>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Why Choose Steam Cleaning for Your Grass Valley Home?">
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            CarpetCozy utilizes the powerful hot water extraction method, commonly known as steam cleaning, for the deepest and most thorough carpet cleaning available in Grass Valley, CA. This method is highly recommended by carpet manufacturers for maintaining carpet warranties and achieving superior results.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Benefits of Our Grass Valley Steam Cleaning Service:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li><strong className="font-semibold">Deep Dirt Removal:</strong> Hot water and specialized solutions penetrate deep into carpet fibers to loosen and extract embedded dirt, soil, and grime.</li>
            <li><strong className="font-semibold">Allergen Reduction:</strong> Effectively removes common household allergens like dust mites, pet dander, and pollen, improving indoor air quality – crucial for allergy sufferers in Grass Valley.</li>
            <li><strong className="font-semibold">Effective Stain Removal:</strong> Highly effective against a wide range of stains, including tough <strong className="font-semibold">pet stains and odors</strong>.</li>
            <li><strong className="font-semibold">Eco-Friendly & Safe:</strong> We use <strong className="font-semibold">green, non-toxic cleaning products</strong> that are safe for your children, pets, and the environment.</li>
            <li><strong className="font-semibold">Revitalizes Carpet Appearance:</strong> Restores the look and feel of your carpets, lifting matted fibers and brightening colors.</li>
            <li><strong className="font-semibold">No Sticky Residue:</strong> Our thorough rinsing process ensures no dirt-attracting residue is left behind.</li>
          </ul>
          <p className="mb-6">
            Our professional steam cleaning process ensures a healthier home environment and extends the life of your carpets. Trust the experts at CarpetCozy for your Grass Valley steam cleaning needs.
          </p>
          <div className="text-center mt-8">
             <Button href="/contact" variant="primary" size="lg">Schedule Your Steam Cleaning</Button>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Deep Clean Difference!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get the best steam cleaning service in Grass Valley. Contact CarpetCozy today for a free estimate!
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            size="lg"
          >
            Request Your Free Quote
          </Button>
        </div>
      </section>
    </>
  );
}