import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
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
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative h-full">
            <Image 
              src="/images/hero-carpet.jpg" 
              alt={`Carpet Cleaning in ${displayName}`} 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl bg-black/30 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
              Professional Carpet Cleaning in {displayName}
            </h1>
            <p className="text-xl max-w-2xl">
              Trusted, eco-friendly carpet cleaning services for homes and businesses in {displayName}.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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

      {/* Area Introduction */}
      <Section title={`Carpet Cleaning in ${displayName}`} subtitle={`We proudly provide professional carpet cleaning services throughout ${displayName}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 text-gray-700">
              At CarpetCozy, we've been serving the {displayName} community with exceptional carpet cleaning services for years. Our team of trained technicians understands the unique carpet cleaning needs of {displayName} residents and businesses.
            </p>
            <p className="mb-6 text-gray-700">
              From residential carpet cleaning to commercial services, we use advanced equipment and eco-friendly cleaning solutions to deliver outstanding results. We're committed to providing {displayName} with the highest quality carpet cleaning services at competitive prices.
            </p>
            <p className="mb-6 text-gray-700">
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
      <Section bgColor="gray" title={`Our Services in ${displayName}`} subtitle="We offer a comprehensive range of carpet cleaning services to meet all your needs">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Residential Carpet Cleaning</h3>
            <p className="text-gray-700">
              We provide thorough carpet cleaning for homes in {displayName}, removing deep-seated dirt, allergens, and stains to create a healthier living environment.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Commercial Carpet Cleaning</h3>
            <p className="text-gray-700">
              Keep your {displayName} business looking professional with our commercial carpet cleaning services, designed to maintain your facility's appearance and extend carpet life.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Pet Stain & Odor Removal</h3>
            <p className="text-gray-700">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Local Expertise</h3>
            <p className="text-gray-700 mb-4">
              As a local company serving {displayName}, we understand the specific needs of homes and businesses in this area. Our team has extensive experience working with different carpet types and addressing common issues faced by {displayName} residents.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Knowledge of local water quality and its impact on cleaning
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Understanding of common carpet types in {displayName} homes
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Quick response times throughout the {displayName} area
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Superior Results</h3>
            <p className="text-gray-700 mb-4">
              Our advanced cleaning methods and equipment deliver exceptional results that meet the high standards of {displayName} residents. We're committed to providing thorough cleaning that leaves your carpets looking and feeling rejuvenated.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                State-of-the-art equipment for deep cleaning
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Eco-friendly cleaning solutions safe for families and pets
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-800 p-6 border border-blue-700 rounded-lg">
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-blue-100 mb-4 italic">
              "CarpetCozy did an amazing job on our carpets in {displayName}. They were professional, thorough, and our carpets have never looked better. Highly recommended!"
            </p>
            <p className="font-semibold text-white">Robert Johnson</p>
            <p className="text-blue-200 text-sm">{displayName} Resident</p>
          </div>
          
          <div className="bg-blue-800 p-6 border border-blue-700 rounded-lg">
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-blue-100 mb-4 italic">
              "We've used CarpetCozy for our business in {displayName} multiple times, and they always deliver exceptional results. The team is reliable, efficient, and truly cares about quality."
            </p>
            <p className="font-semibold text-white">Lisa Martinez</p>
            <p className="text-blue-200 text-sm">{displayName} Business Owner</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button href="/reviews" variant="outline" className="border-white text-white hover:bg-white/10">
            Read More Reviews
          </Button>
        </div>
      </Section>

      {/* FAQs for This Area */}
      <Section bgColor="gray" title={`Frequently Asked Questions About ${displayName} Carpet Cleaning`} subtitle="Get answers to common questions about our services in your area">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-700">How quickly can you service my {displayName} location?</h3>
              <p className="text-gray-700">
                We typically provide service to {displayName} locations within 1-3 business days of your call. For urgent situations, we offer expedited service when possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Do you offer free estimates for {displayName} customers?</h3>
              <p className="text-gray-700">
                Yes, we provide free, no-obligation estimates for all {displayName} residents and businesses. Contact us to schedule your free quote today.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-700">How long does carpet cleaning take in {displayName}?</h3>
              <p className="text-gray-700">
                Carpet cleaning time varies based on the size of the area and the level of soiling. On average, a standard {displayName} home takes 2-4 hours to complete, with drying times of 4-6 hours.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">Ready for Professional Carpet Cleaning in {displayName}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact CarpetCozy today to schedule your carpet cleaning service or request a free quote!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              href="/contact" 
              className="bg-white text-blue-700 hover:bg-gray-100"
              size="lg"
            >
              Request a Free Quote
            </Button>
          </div> {/* Removed Call Us button */}
        </div>
      </section>
    </>
  );
} 