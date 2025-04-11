import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { serviceAreas } from "./data";

export const metadata = {
  title: "Service Areas | CarpetCozy - Professional Carpet Cleaning",
  description: "CarpetCozy provides professional carpet cleaning services in Roseville, Rocklin, Loomis, Folsom, and throughout the greater Sacramento area.",
  keywords: "carpet cleaning Roseville, carpet cleaning Rocklin, carpet cleaning Loomis, carpet cleaning Folsom, carpet cleaning Sacramento area",
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section - Styled like homepage */}
      <section className="hero relative h-[60vh] min-h-[500px] flex items-center"> {/* Adjusted height slightly */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 mix-blend-multiply"></div>
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("/images/textures/pattern.svg")',
              backgroundSize: '200px',
              backgroundRepeat: 'repeat',
            }}>
          </div>
          {/* Main background image */}
          <div className="relative h-full">
            <Image
              src="/images/about-hero.jpg" // Reusing about hero image for now
              alt="Map showing CarpetCozy service areas"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Centered the container and text */}
        <div className="container mx-auto px-4 z-10 flex justify-center text-center">
          {/* Increased max-width and centered */}
          <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-lg backdrop-blur-sm shadow-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow">
              Our Service Areas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow">
              Find out if CarpetCozy provides professional cleaning services in your community.
            </p>
            {/* Buttons removed for this page, can be added if needed */}
          </div>
        </div>
      </section>

      {/* Service Areas Overview */}
      <Section title="Areas We Serve" subtitle="We proudly provide carpet cleaning services throughout the following communities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceAreas.map((area) => (
            <div key={area.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 card-hover border border-gray-100">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-2">{area.name}</h2>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <Link href={`/areas/${area.slug}`} className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more about our services in {area.name}
                  <svg className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Service Radius Map */}
      <Section bgColor="alt" title="Our Service Radius" subtitle="We typically service within a 25-mile radius of Roseville"> {/* Changed gray to alt */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Interactive Service Area Map</p>
          </div>
        </div>
      </Section>

      {/* Area Specific Benefits */}
      <Section title="Local Expertise" subtitle="Benefits of working with a locally owned and operated carpet cleaning service">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Local Knowledge</h3>
            <p className="text-gray-700">
              We understand the specific carpet cleaning needs of homes in the Sacramento area, including local water quality and common carpet issues.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
            <p className="text-gray-700">
              Because we're local, we can respond quickly to your carpet cleaning needs, often scheduling service within days of your call.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Community Connection</h3>
            <p className="text-gray-700">
              We're proud members of the local community, supporting area businesses and events while building relationships with our neighbors.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section bgColor="faq" title="Frequently Asked Questions" subtitle="Common questions about our service areas"> {/* Use FAQ background, default dark text */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* White card, rounded-xl, shadow-md */}
              <h3 className="text-xl font-bold mb-2 text-text-primary">Do you charge a travel fee for distant locations?</h3> {/* Dark text */}
              <p className="text-text-primary/80"> {/* Muted dark text */}
                We generally don't charge travel fees for locations within our standard service area (25-mile radius of Roseville). For locations just outside this area, a small travel fee may apply.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* White card, rounded-xl, shadow-md */}
              <h3 className="text-xl font-bold mb-2 text-text-primary">Can you service locations outside your standard service area?</h3> {/* Dark text */}
              <p className="text-text-primary/80"> {/* Muted dark text */}
                Yes, we can accommodate requests outside our standard service area for an additional travel fee. Please contact us for more information.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* White card, rounded-xl, shadow-md */}
              <h3 className="text-xl font-bold mb-2 text-text-primary">How quickly can you schedule service in my area?</h3> {/* Dark text */}
              <p className="text-text-primary/80"> {/* Muted dark text */}
                Our response time varies by location and current schedule, but we typically can accommodate appointments within 1-3 business days for most areas we serve.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">Ready to Schedule Your Carpet Cleaning?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule your professional carpet cleaning service in your area!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              href="/contact" 
              className="bg-white text-blue-700 hover:bg-gray-100"
              size="lg"
            >
              Contact Us Today
            </Button>
            <Button 
              href="tel:555-123-4567" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              size="lg"
            >
              Call Us: 555-123-4567
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 