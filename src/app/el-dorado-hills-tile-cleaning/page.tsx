import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "El Dorado Hills Tile & Grout Cleaning | Restore Your Floors | CarpetCozy",
  description: "Expert tile and grout cleaning services in El Dorado Hills, CA. We remove tough buildup and restore the shine to your tile floors. Free estimates!",
  keywords: "tile cleaning El Dorado Hills, grout cleaning El Dorado Hills, tile floor restoration El Dorado Hills, ceramic tile cleaning El Dorado Hills, grout sealing El Dorado Hills",
};

export default function ElDoradoHillsTileCleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-blue-800 text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative h-full">
            {/* Consider a relevant tile cleaning image */}
            <Image 
              src="/images/service-stain-treatment.jpg" // Placeholder image, replace with tile-specific one if available
              alt="Professional tile and grout cleaning in El Dorado Hills, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">El Dorado Hills Tile & Grout Cleaning</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Restore the beauty of your tile floors with our professional cleaning and restoration services in El Dorado Hills.
          </p>
          <Button href="/contact" size="lg">Get a Tile Cleaning Quote</Button>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Expert Tile and Grout Restoration in El Dorado Hills">
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            Are your tile floors looking dull and your grout lines discolored? CarpetCozy offers specialized tile and grout cleaning services throughout El Dorado Hills, CA. Over time, dirt, grime, and soap scum build up, leaving your floors looking less than their best.
          </p>
          <p className="mb-6">
            Our trained technicians use powerful, yet safe, cleaning solutions and high-pressure equipment to deep clean your tile and grout lines, removing years of buildup. We can restore the original shine to ceramic, porcelain, and other tile surfaces in your El Dorado Hills home or business.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Our El Dorado Hills Tile Cleaning Process:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>Inspection of tile and grout condition</li>
            <li>Application of specialized tile cleaning solution</li>
            <li>High-pressure hot water rinse and extraction</li>
            <li>Grout line scrubbing for deep cleaning</li>
            <li>Optional grout sealing to protect against future stains</li>
            <li>Final inspection to ensure your satisfaction</li>
          </ul>
          <p className="mb-6">
            Ask about our <strong className="font-semibold">before-and-after gallery</strong> to see the dramatic difference professional tile cleaning can make for El Dorado Hills homes!
          </p>
          <div className="text-center mt-8">
             <Button href="/contact" variant="primary" size="lg">Restore Your Tile Floors Today</Button>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Brighten Your El Dorado Hills Home with Clean Tile!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't live with dirty grout lines any longer. Contact CarpetCozy for a free tile and grout cleaning estimate in El Dorado Hills.
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            size="lg"
          >
            Get Your Free Tile Quote
          </Button>
        </div>
      </section>
    </>
  );
}