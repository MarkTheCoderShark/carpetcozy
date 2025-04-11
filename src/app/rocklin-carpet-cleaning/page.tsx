import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard"; // Added import

export const metadata = {
  title: "Rocklin Carpet Cleaning | CarpetCozy - #1 Local Cleaners",
  description: "Professional carpet cleaning services in Rocklin, CA. Expert cleaners for homes and businesses throughout Rocklin. Get a free quote!",
  keywords: "carpet cleaning Rocklin CA, Rocklin carpet cleaners, best carpet cleaning in Rocklin, residential carpet cleaning Rocklin, professional carpet cleaning Rocklin",
};

export default function RocklinCarpetCleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center"> {/* Removed bg/text color */}
        <div className="absolute inset-0 z-0">
          {/* Removed dark overlay */}
          <div className="relative h-full">
            <Image 
              src="/images/hero-carpet.jpg" // Consider a Rocklin-specific image if available
              alt="Professional carpet cleaning in Rocklin, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-text-primary"> {/* Set text color */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rocklin Carpet Cleaning Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Expert carpet cleaning for homes throughout Rocklin, CA. We bring life back to your carpets!
          </p>
          <Button href="/contact" size="lg" variant="primary">Get Your Free Quote Today</Button> {/* Use primary variant */}
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Your Trusted Carpet Cleaners in Rocklin"> {/* Uses default bg */}
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            CarpetCozy provides top-rated professional carpet cleaning services across Rocklin, CA. From established neighborhoods like <strong className="font-semibold text-primary">Stanford Ranch</strong> to the beautiful homes in <strong className="font-semibold text-primary">Whitney Oaks</strong>, our expert technicians are equipped to handle all your carpet cleaning needs, ensuring your home or business looks its best.
          </p>
          <p className="mb-6">
            We use advanced hot water extraction (steam cleaning) methods and eco-friendly solutions to deep clean your carpets, removing dirt, allergens, stains, and odors effectively. Our goal is to leave your carpets looking and feeling fresh, extending their lifespan and improving your home's air quality in Rocklin, whether you're near <strong className="font-semibold text-primary">Quarry Park Adventures</strong> or closer to the <strong className="font-semibold text-primary">Galleria</strong>.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-text-primary">Why Choose CarpetCozy in Rocklin?</h3> {/* Updated color */}
          <ul className="list-disc list-inside space-y-2 mb-6 text-text-primary/80"> {/* Updated color */}
            <li>Experienced, background-checked technicians</li>
            <li>Eco-friendly, non-toxic cleaning solutions safe for families & pets</li>
            <li>Advanced steam cleaning equipment for deep extraction</li>
            <li>Specialized stain and odor removal treatments</li>
            <li>Competitive pricing and free, no-obligation quotes</li>
            <li>Serving all Rocklin neighborhoods</li>
          </ul>
          <div className="text-center mt-8">
             <Button href="/contact" variant="primary" size="lg">Schedule Your Rocklin Cleaning</Button> {/* Already primary */}
          </div>
        </div>
      </Section>

      {/* Testimonial Section */}
      <Section bgColor="alt" title="What Rocklin Residents Say">
        <div className="max-w-3xl mx-auto">
          <TestimonialCard
            quote="Fantastic service from start to finish. They removed tough pet stains I thought were permanent. Fair pricing and excellent results right here in Rocklin."
            author="Mark T."
            location="Rocklin, CA"
            rating={5}
          />
        </div>
      </Section>

      {/* Related Services Section */}
      <Section title="Other Services We Offer in Rocklin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <ServiceCard
            title="Tile & Grout Cleaning"
            description="Restore the shine to your tile floors and grout lines in Rocklin."
            image="/images/service-stain-treatment.jpg" // Placeholder - use relevant image
            href="/rocklin-tile-cleaning" // Link to specific Rocklin service page
          />
          <ServiceCard
            title="Upholstery Cleaning"
            description="Revive your sofas and chairs with our professional upholstery cleaning."
            image="/images/service-upholstery.jpg"
            href="/rocklin-upholstery-cleaning" // Link to specific Rocklin service page
          />
          <ServiceCard
            title="Commercial Carpet Cleaning"
            description="Keep your Rocklin business looking sharp with our commercial services."
            image="/images/service-commercial.jpg"
            href="/rocklin-commercial-carpet-cleaning" // Link to specific Rocklin service page
          />
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="bg-primary text-text-primary py-16"> {/* Updated background and text */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Spotless Carpets in Rocklin!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready for cleaner, fresher carpets? Contact CarpetCozy today for your free Rocklin carpet cleaning estimate.
          </p>
          <Button href="/contact" variant="secondary" size="lg"> {/* Use secondary variant */}
            Request a Free Quote Now
          </Button>
        </div>
      </section>
    </>
  );
}