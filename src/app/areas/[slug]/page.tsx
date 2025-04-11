import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import TestimonialCard from "@/components/ui/TestimonialCard"; // Import TestimonialCard
import { serviceAreas, ServiceArea } from "../data";

export async function generateStaticParams() {
  return serviceAreas.map((area: ServiceArea) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const area = serviceAreas.find((area: ServiceArea) => area.slug === params.slug);
  
  if (!area) {
    return {
      title: "Area Not Found | CarpetCozy",
      description: "Sorry, this service area couldn't be found.",
    };
  }
  
  return {
    title: `Carpet Cleaning in ${area.name} | CarpetCozy`,
    description: `Professional carpet cleaning services in ${area.name}. CarpetCozy offers residential and commercial carpet cleaning, upholstery cleaning, and more in ${area.name}.`,
    keywords: `carpet cleaning ${area.name}, professional carpet cleaning ${area.name}, ${area.name} carpet cleaners, upholstery cleaning ${area.name}, commercial carpet cleaning ${area.name}`,
  };
}

// Make the component async to align with best practices for using params
export default async function ServiceAreaPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const area = serviceAreas.find((area: ServiceArea) => area.slug === params.slug);
  
  if (!area) {
    notFound();
  }
  
  // Convert slug to title case for display if needed
  const formatLocationName = (name: string) => {
    return name.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  };
  
  const displayName = area.name || formatLocationName(params.slug);
  
  return (
    <>
      {/* Add JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CarpetCozy",
          "image": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/carpetcozy.png`, // Use absolute URL
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}`, // Use absolute URL
          "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcozy.com'}/areas/${area.slug}`, // Use absolute URL for this specific area page
          // telephone property removed as requested
          "description": `Professional carpet cleaning services in ${area.name}. CarpetCozy offers residential and commercial carpet cleaning, upholstery cleaning, and more in ${area.name}.`,
          "address": { // Add a generic address or headquarters if applicable, or omit if service area only
            "@type": "PostalAddress",
            "addressLocality": area.name, // Specific area name
            "addressRegion": "CA", // Assuming California, adjust if needed
            "addressCountry": "US"
          },
          "geo": { // Optional: Add coordinates if known for the area center
            "@type": "GeoCoordinates",
            // "latitude": 38.7521, // Example for Roseville
            // "longitude": -121.2880 // Example for Roseville
          },
          "openingHoursSpecification": [ // Example opening hours, adjust as needed
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "15:00"
            }
          ],
          "areaServed": {
            "@type": "Place",
            "name": area.name // Explicitly state the area served
          },
          "makesOffer": [ // List main services offered in this area
             { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Carpet Cleaning" }},
             { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Carpet Cleaning" }},
             { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pet Stain & Odor Removal" }},
             { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Upholstery Cleaning" }}
          ],
          "sameAs": [ // Add social media/other profile links if available
            // "https://www.facebook.com/carpetcozy",
            // "https://www.yelp.com/biz/carpetcozy-roseville"
          ]
        }) }}
      />
      {/* Hero Section - Standard Structure */}
      <section className="hero relative h-[60vh] min-h-[500px] flex items-center"> {/* Match homepage hero style */}
        <div className="absolute inset-0 z-0">
          {/* Main background image */}
          <div className="relative h-full">
            <Image
              src="/hero.png" // Use the new hero image
              alt="CarpetCozy Hero Background" // Updated alt text
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Centered the container and text */}
        <div className="container mx-auto px-4 z-10 flex justify-center text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-lg text-text-primary"> {/* Ensure text color */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Carpet Cleaning in {displayName}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Trusted, eco-friendly carpet cleaning services for homes and businesses in {displayName}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="/contact" size="lg" variant="primary"> {/* Use primary variant */}
                Get a Free Quote
              </Button>
              <Button href="/services" variant="secondary" size="lg"> {/* Use secondary variant */}
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Area Introduction */}
      <Section title={`Carpet Cleaning in ${displayName}`} subtitle={`We proudly provide professional carpet cleaning services throughout ${displayName}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 text-text-primary/80"> {/* Theme text color */}
              At CarpetCozy, we've been serving the {displayName} community with exceptional carpet cleaning services for years. Our team of trained technicians understands the unique carpet cleaning needs of {displayName} residents and businesses.
            </p>
            <p className="mb-6 text-text-primary/80"> {/* Theme text color */}
              From residential carpet cleaning to commercial services, we use advanced equipment and eco-friendly cleaning solutions to deliver outstanding results. We're committed to providing {displayName} with the highest quality carpet cleaning services at competitive prices.
            </p>
            <p className="mb-6 text-text-primary/80"> {/* Theme text color */}
              Our {displayName} customers appreciate our attention to detail, professional approach, and commitment to customer satisfaction. We take pride in leaving your carpets looking fresh, clean, and rejuvenated.
            </p>
            <Button href="/contact">Schedule Your Cleaning Today</Button>
          </div>
          <div className="relative h-80 lg:h-96">
            <Image 
              src="/images/about-team.jpg" 
              alt={`CarpetCozy team serving ${displayName}`} 
              fill 
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Services We Offer */}
      <Section bgColor="alt" title={`Our Services in ${displayName}`} subtitle="We offer a comprehensive range of carpet cleaning services to meet all your needs"> {/* Changed gray to alt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Adjusted gap */}
          {/* Service Card 1 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100 transition-shadow hover:shadow-lg"> {/* Card styling */}
            <div className="text-primary mb-4"> {/* Icon color */}
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-text-primary">Residential Carpet Cleaning</h3> {/* Text color */}
            <p className="text-text-primary/80"> {/* Text color */}
              We provide thorough carpet cleaning for homes in {displayName}, removing deep-seated dirt, allergens, and stains to create a healthier living environment.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100 transition-shadow hover:shadow-lg"> {/* Card styling */}
            <div className="text-primary mb-4"> {/* Icon color */}
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-text-primary">Commercial Carpet Cleaning</h3> {/* Text color */}
            <p className="text-text-primary/80"> {/* Text color */}
              Keep your {displayName} business looking professional with our commercial carpet cleaning services, designed to maintain your facility's appearance and extend carpet life.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100 transition-shadow hover:shadow-lg"> {/* Card styling */}
            <div className="text-primary mb-4"> {/* Icon color */}
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-text-primary">Pet Stain & Odor Removal</h3> {/* Text color */}
            <p className="text-text-primary/80"> {/* Text color */}
              Our specialized treatments effectively eliminate pet stains and odors from carpets in {displayName} homes, leaving your carpets fresh and clean.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button href="/services">View All Our Services</Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section title={`Why ${displayName} Residents Choose CarpetCozy`} subtitle="Experience the difference with our professional carpet cleaning services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted gap */}
          {/* Why Choose Us Card 1 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100 transition-shadow hover:shadow-lg"> {/* Card styling */}
            <h3 className="text-xl font-bold mb-3 text-primary">Local Expertise</h3> {/* Theme color */}
            <p className="text-text-primary/80 mb-4"> {/* Theme text color */}
              As a local company serving {displayName}, we understand the specific needs of homes and businesses in this area. Our team has extensive experience working with different carpet types and addressing common issues faced by {displayName} residents.
            </p>
            <ul className="space-y-2 text-text-primary/80"> {/* Theme text color */}
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Theme icon color */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Knowledge of local water quality and its impact on cleaning
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Theme icon color */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Understanding of common carpet types in {displayName} homes
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Theme icon color */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Quick response times throughout the {displayName} area
              </li>
            </ul>
          </div>
          {/* Why Choose Us Card 2 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100 transition-shadow hover:shadow-lg"> {/* Card styling */}
            <h3 className="text-xl font-bold mb-3 text-primary">Superior Results</h3> {/* Theme color */}
            <p className="text-text-primary/80 mb-4"> {/* Theme text color */}
              Our advanced cleaning methods and equipment deliver exceptional results that meet the high standards of {displayName} residents. We're committed to providing thorough cleaning that leaves your carpets looking and feeling rejuvenated.
            </p>
            <ul className="space-y-2 text-text-primary/80"> {/* Theme text color */}
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Theme icon color */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                State-of-the-art equipment for deep cleaning
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Theme icon color */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Eco-friendly cleaning solutions safe for families and pets
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Theme icon color */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Thorough stain treatment and removal process
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Testimonials from the Area */}
      <Section bgColor="dark" textColor="light" title={`What ${displayName} Customers Say`} subtitle="Don't just take our word for it. Hear from our satisfied customers in your area.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted gap */}
          {/* Testimonial 1 */}
          <TestimonialCard
            quote={`CarpetCozy did an amazing job on our carpets in ${displayName}. They were professional, thorough, and our carpets have never looked better. Highly recommended!`}
            author="Robert Johnson"
            location={`${displayName} Resident`}
            rating={5}
            variant="dark" // Use dark variant for contrast on dark section bg
          />
          {/* Testimonial 2 */}
          <TestimonialCard
            quote={`We've used CarpetCozy for our business in ${displayName} multiple times, and they always deliver exceptional results. The team is reliable, efficient, and truly cares about quality.`}
            author="Lisa Martinez"
            location={`${displayName} Business Owner`}
            rating={5}
            variant="dark" // Use dark variant
          />
          {/* Add more testimonials specific to the area if available */}
        </div>
        <div className="mt-12 text-center">
          <Button href="/reviews" variant="outline" className="border-white text-white hover:bg-white/10">
            Read More Reviews
          </Button>
        </div>
      </Section>

      {/* FAQs for This Area */}
      <Section bgColor="faq" title={`Frequently Asked Questions About ${displayName} Carpet Cleaning`} subtitle="Get answers to common questions about our services in your area"> {/* Use FAQ background */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* White card, rounded-xl, shadow-md */}
              <h3 className="text-xl font-bold mb-2 text-text-primary">How quickly can you service my {displayName} location?</h3> {/* Theme text color */}
              <p className="text-text-primary/80"> {/* Muted theme text color */}
                We typically provide service to {displayName} locations within 1-3 business days of your call. For urgent situations, we offer expedited service when possible.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* White card, rounded-xl, shadow-md */}
              <h3 className="text-xl font-bold mb-2 text-text-primary">Do you offer free estimates for {displayName} customers?</h3> {/* Theme text color */}
              <p className="text-text-primary/80"> {/* Muted theme text color */}
                Yes, we provide free, no-obligation estimates for all {displayName} residents and businesses. Contact us to schedule your free quote today.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* White card, rounded-xl, shadow-md */}
              <h3 className="text-xl font-bold mb-2 text-text-primary">How long does carpet cleaning take in {displayName}?</h3> {/* Theme text color */}
              <p className="text-text-primary/80"> {/* Muted theme text color */}
                Carpet cleaning time varies based on the size of the area and the level of soiling. On average, a standard {displayName} home takes 2-4 hours to complete, with drying times of 4-6 hours.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action - Refactored */}
      <Section bgColor="dark" textColor="light"> {/* Use dark brown bg, light text */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Carpet Cleaning in {displayName}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-background/80"> {/* Muted light text */}
            Contact CarpetCozy today to schedule your carpet cleaning service or request a free quote!
          </p>
          <Button href="/contact" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90"> {/* Secondary button with light text on dark bg */}
            Request a Free Quote
          </Button>
        </div>
      </Section>
    </>
  );
}