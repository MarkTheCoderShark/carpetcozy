import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import TeamImage from "@/components/TeamImage";

export const metadata = {
  title: "About Us | CarpetCozy - Professional Carpet Cleaning",
  description: "Learn about CarpetCozy, our professional carpet cleaning team, our mission, values, and commitment to quality service in Roseville and surrounding areas.",
  keywords: "carpet cleaning company, about CarpetCozy, professional cleaners, Roseville carpet cleaning history, carpet cleaning mission",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero relative bg-cover bg-center pt-32 pb-24 min-h-[500px]"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
            About CarpetCozy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary/80">
            Learn about our story, our mission, and the dedicated team behind our exceptional cleaning services.
          </p>
        </div>
      </section>

      {/* Our Story Section - Now includes team image */}
      <Section title="Our Story" subtitle="Founded on a commitment to quality and customer satisfaction">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="mb-6 text-text-primary/80">
              CarpetCozy started as a small, family-owned business with a simple
              goal: to provide exceptional carpet cleaning services with honesty
              and integrity. Over the years, we&apos;ve grown thanks to our loyal
              customers and commitment to quality, but our core values remain the
              same.
            </p>
            <p className="mb-6 text-text-primary/80">
              Our founder, John Smith, started the company after noticing a gap in the market for truly professional, reliable, and thorough carpet cleaning services. With just one van and a passion for cleanliness, John built CarpetCozy from the ground up, focusing on customer satisfaction and attention to detail.
            </p>
            <p className="text-text-primary/80">
              Today, we&apos;ve grown into a trusted team of professionals, but our core values remain the same: integrity, quality, and a commitment to making your carpets truly cozy.
            </p>
          </div>
          <TeamImage containerClassName="h-80 lg:h-96 order-1 lg:order-2" />
        </div>
      </Section>

      {/* Our Mission Section */}
      <Section bgColor="alt" title="Our Mission" subtitle="Providing exceptional carpet cleaning services with integrity and expertise">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-8 text-text-primary/80 text-lg">
            At CarpetCozy, our mission is to enhance the cleanliness, health, and comfort of homes and businesses through professional carpet cleaning services that exceed expectations. We aim to build lasting relationships with our clients based on trust, reliability, and superior results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Mission Card 1 */}
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-primary">Excellence</h3>
              <p className="text-text-primary/80">
                We strive for excellence in every job, using the best techniques and equipment to deliver outstanding results.
              </p>
            </div>
            {/* Mission Card 2 */}
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-primary">Integrity</h3>
              <p className="text-text-primary/80">
                We operate with transparency and honesty, providing fair pricing and honest recommendations.
              </p>
            </div>
            {/* Mission Card 3 */}
            <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-primary">Reliability</h3>
              <p className="text-text-primary/80">
                Our customers can count on us to be punctual, professional, and consistent in delivering high-quality service.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Team Section */}
      <Section title="Our Professional Team" subtitle="The experienced experts behind our exceptional service">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background p-8 rounded-xl shadow-md border border-gray-100">
            <p className="mb-6 text-text-primary/80 text-lg">
              At CarpetCozy, our team consists of highly trained and experienced cleaning professionals who are passionate about delivering outstanding results. Each team member undergoes rigorous training in the latest cleaning techniques and technologies to ensure your carpets receive the best possible care.
            </p>
            <p className="mb-6 text-text-primary/80 text-lg">
              Our cleaning technicians are certified professionals with years of experience in the industry. They&apos;re not just skilled at what they do—they&apos;re also friendly, respectful, and committed to providing exceptional customer service on every job.
            </p>
            <p className="text-text-primary/80 text-lg">
              From our office staff who schedule your appointments to our technicians who perform the cleaning, every member of the CarpetCozy team is dedicated to making your experience with us as positive and hassle-free as possible. We take pride in our work and it shows in the results we deliver.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section bgColor="alt" title="Why Choose CarpetCozy?" subtitle="What sets us apart from other carpet cleaning services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Why Choose Us Card 1 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-3 flex items-center text-text-primary">
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Experienced Professionals
            </h3>
            <p className="text-text-primary/80">
              Our team has years of experience and continuous training in the latest carpet cleaning techniques and technologies.
            </p>
          </div>
          {/* Why Choose Us Card 2 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-3 flex items-center text-text-primary">
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Advanced Equipment
            </h3>
            <p className="text-text-primary/80">
              We use state-of-the-art equipment and cleaning solutions to deliver the best possible results for your carpets.
            </p>
          </div>
          {/* Why Choose Us Card 3 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-3 flex items-center text-text-primary">
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Eco-Friendly Products
            </h3>
            <p className="text-text-primary/80">
              We&apos;re committed to using environmentally-friendly cleaning products that are safe for your family, pets, and the planet.
            </p>
          </div>
          {/* Why Choose Us Card 4 */}
          <div className="bg-background p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-3 flex items-center text-text-primary">
              <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Satisfaction Guaranteed
            </h3>
            <p className="text-text-primary/80">
              Your satisfaction is our top priority. That&apos;s why we stand behind our
              work with a 100% satisfaction guarantee. If you&apos;re not completely
              happy with our service, let us know, and we&apos;ll make it right.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="dark" textColor="light">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the CarpetCozy Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-background/80">
            Contact us today to schedule your professional carpet cleaning service!
          </p>
          <Button href="/contact" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90">
            Contact Us Today
          </Button>
        </div>
      </Section>
    </>
  );
} 