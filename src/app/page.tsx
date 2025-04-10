import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          {/* Replace with actual carpet cleaning image */}
          <div className="relative h-full">
            <Image 
              src="/images/hero-carpet.jpg" 
              alt="Professional carpet cleaning" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl bg-black/30 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow">
              Professional Carpet Cleaning in Roseville
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Bringing life back to your carpets with our professional, eco-friendly cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="/contact" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/services" variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm card-hover">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Trusted & Professional</h3>
            <p className="text-gray-600">With years of experience, we deliver exceptional results that keep our customers coming back.</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm card-hover">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Eco-Friendly Solutions</h3>
            <p className="text-gray-600">We use green cleaning products that are safe for your family, pets, and the environment.</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm card-hover">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Fast & Efficient</h3>
            <p className="text-gray-600">Our efficient process minimizes disruption to your home or business with quick dry times.</p>
          </div>
        </div>
      </Section>

      {/* About Preview Section */}
      <Section bgColor="gray" title="About CarpetCozy" subtitle="We're committed to providing the highest quality carpet cleaning services in Roseville and surrounding areas.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 text-gray-700">
              At CarpetCozy, we believe that clean carpets make for a healthier, more comfortable home. Founded with a passion for cleanliness and customer satisfaction, we've been serving the Roseville area for years with professional carpet cleaning services.
            </p>
            <p className="mb-6 text-gray-700">
              Our team of experienced technicians uses the latest equipment and eco-friendly cleaning solutions to remove deep-seated dirt, stains, allergens, and odors from your carpets, leaving them fresh, clean, and cozy.
            </p>
            <Button href="/about">Learn More About Us</Button>
          </div>
          <div className="relative h-80 lg:h-96">
            <Image 
              src="/images/about-team.jpg" 
              alt="CarpetCozy team" 
              fill 
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Services Preview Section */}
      <Section title="Our Services" subtitle="We offer a range of professional carpet cleaning services to meet your needs.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Residential Carpet Cleaning" 
            description="Deep cleaning service for homes that removes dirt, stains, and allergens from your carpets."
            image="/images/service-residential.jpg"
            href="/services/residential"
          />
          <ServiceCard 
            title="Commercial Carpet Cleaning" 
            description="Professional cleaning solutions for offices, retail spaces, and other commercial properties."
            image="/images/service-commercial.jpg"
            href="/services/commercial"
          />
          <ServiceCard 
            title="Pet Stain & Odor Removal" 
            description="Specialized treatments to eliminate pet stains and odors from your carpets and upholstery."
            image="/images/service-pet-stain.jpg"
            href="/services/pet-stain-removal"
          />
        </div>
        <div className="mt-12 text-center">
          <Button href="/services">View All Services</Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section bgColor="dark" textColor="light" title="Customer Testimonials" subtitle="Don't just take our word for it. Here's what our satisfied customers have to say.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="CarpetCozy did an amazing job on our carpets. They looked brand new after the cleaning, and the technician was professional and friendly."
            author="Sarah Johnson"
            location="Roseville"
            rating={5}
            variant="dark"
          />
          <TestimonialCard 
            quote="I was impressed with how quickly they were able to remove all the stains from our office carpets. Great service at a reasonable price!"
            author="Michael Rodriguez"
            location="Rocklin"
            rating={5}
            variant="dark"
          />
          <TestimonialCard 
            quote="We've tried other carpet cleaners in the past, but none compare to CarpetCozy. They're now our go-to for all our carpet cleaning needs."
            author="Jennifer Lewis"
            location="Folsom"
            rating={4}
            variant="dark"
          />
        </div>
        <div className="mt-12 text-center">
          <Button href="/reviews" variant="outline" className="border-white text-white hover:bg-white/10">
            Read More Reviews
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">Ready for Cleaner, Fresher Carpets?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote and experience the CarpetCozy difference!
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-blue-700 hover:bg-gray-100"
            size="lg"
          >
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </>
  );
}
