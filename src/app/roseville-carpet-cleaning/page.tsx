import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard"; // Added import

export const metadata = {
  title: "Roseville Carpet Cleaning | CarpetCozy - #1 Local Cleaners",
  description: "Professional carpet cleaning services in Roseville, CA. Expert cleaners for homes in Westpark, Highland Reserve, Sun City, Fiddyment Farm & more. Get a free quote!",
  keywords: "carpet cleaning Roseville CA, Roseville carpet cleaners, best carpet cleaning in Roseville, residential carpet cleaning Roseville, professional carpet cleaning Roseville",
};

export default function RosevilleCarpetCleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center"> {/* Removed bg/text color, handled by image/overlay */}
        <div className="absolute inset-0 z-0">
          {/* Removed dark overlay */}
          <div className="relative h-full">
            <Image 
              src="/images/hero-carpet.jpg" // Consider a Roseville-specific image if available
              alt="Professional carpet cleaning in Roseville, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-text-primary"> {/* Set text color */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roseville Carpet Cleaning Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Expert carpet cleaning for homes throughout Roseville, CA. We bring life back to your carpets!
          </p>
          <Button href="/contact" size="lg" variant="primary">Get Your Free Quote Today</Button> {/* Use primary variant */}
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Your Trusted Carpet Cleaners in Roseville"> {/* Uses default bg */}
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            CarpetCozy provides top-rated professional carpet cleaning services across Roseville, CA. Whether you're in a bustling family neighborhood like <strong className="font-semibold text-primary">Westpark</strong> or <strong className="font-semibold text-primary">Highland Reserve</strong>, enjoying retirement in <strong className="font-semibold text-primary">Sun City Roseville</strong>, or settling into a new build in <strong className="font-semibold text-primary">Fiddyment Farm</strong>, our expert technicians are equipped to handle all your carpet cleaning needs. {/* Highlighted neighborhoods */}
          </p>
          <p className="mb-6">
            We use advanced hot water extraction (steam cleaning) methods and eco-friendly solutions to deep clean your carpets, removing dirt, allergens, stains, and odors effectively. Our goal is to leave your carpets looking and feeling fresh, extending their lifespan and improving your home's air quality. Keep your home cozy and clean, especially after enjoying local spots like <strong className="font-semibold text-primary">Maidu Regional Park</strong> or the <strong className="font-semibold text-primary">Roseville Galleria</strong>! {/* Added local touch */}
          </p>
          <h3 className="text-2xl font-bold mb-4 text-text-primary">Why Choose CarpetCozy in Roseville?</h3> {/* Updated color */}
          <ul className="list-disc list-inside space-y-2 mb-6 text-text-primary/80"> {/* Updated color */}
            <li>Experienced, background-checked technicians</li>
            <li>Eco-friendly, non-toxic cleaning solutions safe for families & pets</li>
            <li>Advanced steam cleaning equipment for deep extraction</li>
            <li>Specialized stain and odor removal treatments</li>
            <li>Competitive pricing and free, no-obligation quotes</li>
            <li>Serving all Roseville neighborhoods</li>
          </ul>
          <div className="text-center mt-8">
             <Button href="/contact" variant="primary" size="lg">Schedule Your Roseville Cleaning</Button> {/* Already primary */}
          </div>
        </div>
      </Section>

      {/* Testimonial Section */}
      <Section bgColor="alt" title="What Roseville Residents Say">
        <div className="max-w-3xl mx-auto">
          <TestimonialCard
            quote="CarpetCozy did an amazing job! Our carpets look brand new. The technician was professional, punctual, and very thorough. Highly recommend for anyone in Roseville!"
            author="Sarah L."
            location="Roseville, CA"
            rating={5}
            // variant defaults to light, which is correct for bgColor="alt"
          />
        </div>
      </Section>

      {/* Related Services Section */}
      <Section title="Other Services We Offer in Roseville">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <ServiceCard
            title="Pet Stain & Odor Removal"
            description="Specialized treatments for tough pet accidents in your Roseville home."
            image="/images/service-pet-stain.jpg"
            href="/roseville-pet-stain-removal" // Link to specific Roseville service page
          />
          <ServiceCard
            title="Upholstery Cleaning"
            description="Revive your sofas and chairs with our professional upholstery cleaning."
            image="/images/service-upholstery.jpg"
            href="/roseville-upholstery-cleaning" // Link to specific Roseville service page
          />
          <ServiceCard
            title="Commercial Carpet Cleaning"
            description="Keep your Roseville business looking sharp with our commercial services."
            image="/images/service-commercial.jpg"
            href="/roseville-commercial-carpet-cleaning" // Link to specific Roseville service page
          />
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="bg-primary text-text-primary py-16"> {/* Updated background and text */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Spotless Carpets in Roseville!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready for cleaner, fresher carpets? Contact CarpetCozy today for your free Roseville carpet cleaning estimate.
          </p>
          <Button href="/contact" variant="secondary" size="lg"> {/* Use secondary variant */}
            Request a Free Quote Now
          </Button>
        </div>
      </section>
    </>
  );
}