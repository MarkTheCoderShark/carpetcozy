import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard"; // May use later for related services

export const metadata = {
  title: "El Dorado Hills Carpet Cleaning | CarpetCozy - #1 Local Cleaners",
  description: "Professional carpet cleaning services in El Dorado Hills, CA. Expert cleaners for upscale homes and businesses throughout El Dorado Hills. Get a free quote!",
  keywords: "carpet cleaning El Dorado Hills CA, El Dorado Hills carpet cleaners, best carpet cleaning in El Dorado Hills, residential carpet cleaning El Dorado Hills, professional carpet cleaning El Dorado Hills",
};

export default function ElDoradoHillsCarpetCleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-blue-800 text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative h-full">
            <Image 
              src="/images/hero-carpet.jpg" // Consider an El Dorado Hills-specific image if available
              alt="Professional carpet cleaning in El Dorado Hills, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">El Dorado Hills Carpet Cleaning Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Expert carpet cleaning for homes throughout El Dorado Hills, CA. We bring life back to your carpets!
          </p>
          <Button href="/contact" size="lg">Get Your Free Quote Today</Button>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Your Trusted Carpet Cleaners in El Dorado Hills">
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            CarpetCozy provides top-rated professional carpet cleaning services across El Dorado Hills, CA. Our expert technicians are equipped to handle all your carpet cleaning needs, ensuring your upscale home or business looks its absolute best.
          </p>
          <p className="mb-6">
            We use advanced hot water extraction (steam cleaning) methods and eco-friendly solutions to deep clean your carpets, removing dirt, allergens, stains, and odors effectively. Our goal is to leave your carpets looking and feeling fresh, extending their lifespan and improving your home's air quality in El Dorado Hills.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Why Choose CarpetCozy in El Dorado Hills?</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>Experienced, background-checked technicians</li>
            <li>Eco-friendly, non-toxic cleaning solutions safe for families & pets</li>
            <li>Advanced steam cleaning equipment for deep extraction</li>
            <li>Specialized stain and odor removal treatments</li>
            <li>Competitive pricing and free, no-obligation quotes</li>
            <li>Serving all El Dorado Hills neighborhoods</li>
          </ul>
          <div className="text-center mt-8">
             <Button href="/contact" variant="primary" size="lg">Schedule Your El Dorado Hills Cleaning</Button>
          </div>
        </div>
      </Section>

      {/* Add other relevant sections like testimonials, related services, etc. later */}
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Spotless Carpets in El Dorado Hills!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready for cleaner, fresher carpets? Contact CarpetCozy today for your free El Dorado Hills carpet cleaning estimate.
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            size="lg"
          >
            Request a Free Quote Now
          </Button>
        </div>
      </section>
    </>
  );
}