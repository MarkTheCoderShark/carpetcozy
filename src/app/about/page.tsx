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
      <section
        className="hero relative bg-cover bg-center pt-32 pb-24 min-h-[500px]" // Added padding, bg-cover, bg-center
        style={{ backgroundImage: "url('/hero.png')" }} // Use inline style for background
      >
        <div className="absolute inset-0 z-0">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

        {/* Removed the separate Image component */}
        {/* Content Container */}
        
        {/* Centered the container and text */}
        {/* Added pt-24 (header height) + extra padding */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
            About CarpetCozy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary/80">
            Learn about our story, our mission, and the dedicated team behind our exceptional cleaning services.
          </p>
          {/* Buttons removed for this page */}
            {/* Buttons removed for this page, can be added if needed */}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <Section title="Our Story" subtitle="Founded on a commitment to quality and customer satisfaction">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="mb-6 text-text-primary/80"> {/* Theme text color */}
              CarpetCozy was established in 2010 with a simple mission: to provide exceptional carpet cleaning services that truly make a difference in homes and businesses throughout Roseville and surrounding areas.
            </p>
            <p className="mb-6 text-text-primary/80"> {/* Theme text color */}
              Our founder, John Smith, started the company after noticing a gap in the market for truly professional, reliable, and thorough carpet cleaning services. With just one van and a passion for cleanliness, John built CarpetCozy from the ground up, focusing on customer satisfaction and attention to detail.
            </p>
            <p className="text-text-primary/80"> {/* Theme text color */}
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
      <Section bgColor="alt" title="Our Mission" subtitle="Providing exceptional carpet cleaning services with integrity and expertise"> {/* Changed gray to alt */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-8 text-text-primary/80 text-lg"> {/* Theme text color */}
            At CarpetCozy, our mission is to enhance the cleanliness, health, and comfort of homes and businesses through professional carpet cleaning services that exceed expectations. We aim to build lasting relationships with our clients based on trust, reliability, and superior results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Mission Card 1 */}
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* Card styling */}
              <h3 className="text-xl font-bold mb-3 text-primary">Excellence</h3> {/* Theme color */}
              <p className="text-text-primary/80"> {/* Theme text color */}
                We strive for excellence in every job, using the best techniques and equipment to deliver outstanding results.
              </p>
            </div>
            {/* Mission Card 2 */}
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* Card styling */}
              <h3 className="text-xl font-bold mb-3 text-primary">Integrity</h3> {/* Theme color */}
              <p className="text-text-primary/80"> {/* Theme text color */}
                We operate with transparency and honesty, providing fair pricing and honest recommendations.
              </p>
            </div>
            {/* Mission Card 3 */}
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* Card styling */}
              <h3 className="text-xl font-bold mb-3 text-primary">Reliability</h3> {/* Theme color */}
              <p className="text-text-primary/80"> {/* Theme text color */}
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
            <h3 className="text-xl font-bold text-text-primary">John Smith</h3> {/* Theme text color */}
            <p className="text-primary mb-2">Founder & CEO</p> {/* Theme color */}
            <p className="text-text-primary/80"> {/* Theme text color */}
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
            <h3 className="text-xl font-bold text-text-primary">Sarah Johnson</h3> {/* Theme text color */}
            <p className="text-primary mb-2">Operations Manager</p> {/* Theme color */}
            <p className="text-text-primary/80"> {/* Theme text color */}
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
            <h3 className="text-xl font-bold text-text-primary">Mike Williams</h3> {/* Theme text color */}
            <p className="text-primary mb-2">Lead Technician</p> {/* Theme color */}
            <p className="text-text-primary/80"> {/* Theme text color */}
              Mike brings technical expertise and attention to detail to every cleaning job, ensuring top-quality results.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section bgColor="alt" title="Why Choose CarpetCozy?" subtitle="What sets us apart from other carpet cleaning services"> {/* Keep alt background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted gap */}
          {/* Why Choose Us Card 1 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* Card styling */}
            <h3 className="text-xl font-bold mb-3 flex items-center text-text-primary"> {/* Theme text color */}
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Theme icon color */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Experienced Professionals
            </h3>
            <p className="text-text-primary/80"> {/* Theme text color */}
              Our team has years of experience and continuous training in the latest carpet cleaning techniques and technologies.
            </p>
          </div>
          {/* Why Choose Us Card 2 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* Card styling */}
            <h3 className="text-xl font-bold mb-3 flex items-center text-text-primary"> {/* Theme text color */}
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Theme icon color */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Advanced Equipment
            </h3>
            <p className="text-text-primary/80"> {/* Theme text color */}
              We use state-of-the-art equipment and cleaning solutions to deliver the best possible results for your carpets.
            </p>
          </div>
          {/* Why Choose Us Card 3 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* Card styling */}
            <h3 className="text-xl font-bold mb-3 flex items-center text-text-primary"> {/* Theme text color */}
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Theme icon color */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Eco-Friendly Products
            </h3>
            <p className="text-text-primary/80"> {/* Theme text color */}
              We're committed to using environmentally-friendly cleaning products that are safe for your family, pets, and the planet.
            </p>
          </div>
          {/* Why Choose Us Card 4 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100"> {/* Card styling */}
            <h3 className="text-xl font-bold mb-3 flex items-center text-text-primary"> {/* Theme text color */}
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Theme icon color */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Satisfaction Guaranteed
            </h3>
            <p className="text-text-primary/80"> {/* Theme text color */}
              We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section - Use dark background for contrast */}
      <Section bgColor="dark" textColor="light"> {/* Use dark brown bg, light text */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the CarpetCozy Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-background/80"> {/* Muted light text */}
            Contact us today to schedule your professional carpet cleaning service!
          </p>
          <Button href="/contact" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90"> {/* Secondary button with light text on dark bg */}
            Contact Us Today
          </Button>
        </div>
      </Section>
      {/* Removed extra closing tag */}
    </>
  );
} 