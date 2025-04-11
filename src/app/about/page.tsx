import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About Us | CarpetCozy - Professional Carpet Cleaning",
  description: "Learn about CarpetCozy, our professional carpet cleaning team, our mission, values, and commitment to quality service in Roseville and surrounding areas.",
  keywords: "carpet cleaning company, about CarpetCozy, professional cleaners, Roseville carpet cleaning history, carpet cleaning mission",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
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
              src="/images/about-hero.jpg" // Use About page specific image
              alt="About CarpetCozy Team"
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
              About CarpetCozy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow">
              Learn about our story, our mission, and the dedicated team behind our exceptional cleaning services.
            </p>
            {/* Buttons removed for this page, can be added if needed */}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <Section title="Our Story" subtitle="Founded on a commitment to quality and customer satisfaction">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="mb-6 text-gray-700">
              CarpetCozy was established in 2010 with a simple mission: to provide exceptional carpet cleaning services that truly make a difference in homes and businesses throughout Roseville and surrounding areas.
            </p>
            <p className="mb-6 text-gray-700">
              Our founder, John Smith, started the company after noticing a gap in the market for truly professional, reliable, and thorough carpet cleaning services. With just one van and a passion for cleanliness, John built CarpetCozy from the ground up, focusing on customer satisfaction and attention to detail.
            </p>
            <p className="text-gray-700">
              Today, we've grown into a trusted team of professionals, but our core values remain the same: integrity, quality, and a commitment to making your carpets truly cozy.
            </p>
          </div>
          <div className="relative h-80 lg:h-96 order-1 lg:order-2">
            <Image 
              src="/images/our-story.jpg" 
              alt="CarpetCozy founder" 
              fill 
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </Section>

      {/* Our Mission Section */}
      <Section bgColor="gray" title="Our Mission" subtitle="Providing exceptional carpet cleaning services with integrity and expertise">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-8 text-gray-700 text-lg">
            At CarpetCozy, our mission is to enhance the cleanliness, health, and comfort of homes and businesses through professional carpet cleaning services that exceed expectations. We aim to build lasting relationships with our clients based on trust, reliability, and superior results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in every job, using the best techniques and equipment to deliver outstanding results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Integrity</h3>
              <p className="text-gray-700">
                We operate with transparency and honesty, providing fair pricing and honest recommendations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Reliability</h3>
              <p className="text-gray-700">
                Our customers can count on us to be punctual, professional, and consistent in delivering high-quality service.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Team Section */}
      <Section title="Our Team" subtitle="Meet the professionals behind CarpetCozy's exceptional service">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto mb-4 overflow-hidden rounded-full">
              <Image 
                src="/images/team-1.jpg" 
                alt="John Smith - Founder & CEO" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">John Smith</h3>
            <p className="text-blue-600 mb-2">Founder & CEO</p>
            <p className="text-gray-600">
              With over 15 years of experience in carpet cleaning, John leads our team with expertise and passion.
            </p>
          </div>
          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto mb-4 overflow-hidden rounded-full">
              <Image 
                src="/images/team-2.jpg" 
                alt="Sarah Johnson - Operations Manager" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">Sarah Johnson</h3>
            <p className="text-blue-600 mb-2">Operations Manager</p>
            <p className="text-gray-600">
              Sarah ensures our operations run smoothly and that every customer receives exceptional service.
            </p>
          </div>
          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto mb-4 overflow-hidden rounded-full">
              <Image 
                src="/images/team-3.jpg" 
                alt="Mike Williams - Lead Technician" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">Mike Williams</h3>
            <p className="text-blue-600 mb-2">Lead Technician</p>
            <p className="text-gray-600">
              Mike brings technical expertise and attention to detail to every cleaning job, ensuring top-quality results.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section bgColor="blue" title="Why Choose CarpetCozy?" subtitle="What sets us apart from other carpet cleaning services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Experienced Professionals
            </h3>
            <p className="text-gray-700">
              Our team has years of experience and continuous training in the latest carpet cleaning techniques and technologies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Advanced Equipment
            </h3>
            <p className="text-gray-700">
              We use state-of-the-art equipment and cleaning solutions to deliver the best possible results for your carpets.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Eco-Friendly Products
            </h3>
            <p className="text-gray-700">
              We're committed to using environmentally-friendly cleaning products that are safe for your family, pets, and the planet.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Satisfaction Guaranteed
            </h3>
            <p className="text-gray-700">
              We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the CarpetCozy Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule your professional carpet cleaning service!
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            size="lg"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </>
  );
} 