import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import TeamImage from "@/components/TeamImage";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[700px] bg-hero-gradient animate-fade-in">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-slide-in">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-primary leading-tight">
                Professional Carpet Cleaning in Roseville
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-text-primary/80 font-light">
                Bringing life back to your carpets with our professional, eco-friendly cleaning services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact"
                  size="lg"
                  variant="primary"
                  className="bg-primary text-text-primary hover:bg-cta-hover transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full text-lg px-8 py-4"
                >
                  Get a Free Quote
                </Button>
                <Button
                  href="/services"
                  size="lg"
                  variant="outline"
                  className="border-2 border-text-primary/20 text-text-primary hover:bg-text-primary/5 rounded-full text-lg px-8 py-4"
                >
                  Our Services
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full animate-slide-up flex items-center justify-center">
              <img
                src="/images/upholstery.jpg"
                alt="Professional carpet cleaning"
                className="object-cover w-full h-full rounded-2xl shadow-2xl"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section className="bg-background-alt py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl shadow-card hover:shadow-hover transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-text-primary">
                {feature.title}
              </h3>
              <p className="text-text-primary/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* About Preview Section */}
      <Section className="bg-white py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <TeamImage containerClassName="h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500" />
          <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
              About CarpetCozy
            </h2>
            <p className="text-lg text-text-primary/80 leading-relaxed mb-6">
              At CarpetCozy, we believe that clean carpets make for a healthier, more comfortable home. Founded with a passion for cleanliness and customer satisfaction, we've been serving Roseville and surrounding communities for years with professional carpet cleaning services.
            </p>
            <p className="text-lg text-text-primary/80 leading-relaxed mb-8">
              Our team of experienced technicians uses the latest equipment and eco-friendly cleaning solutions to remove deep-seated dirt, stains, allergens, and odors from your carpets, leaving them fresh, clean, and cozy.
            </p>
            <Button
              href="/about"
              className="text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Preview Section */}
      <Section className="bg-background-alt py-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-text-primary/80 max-w-3xl mx-auto">
            We offer a comprehensive range of professional carpet cleaning services to meet your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-hover transform hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8 flex-grow">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-primary/80 mb-6">{service.description}</p>
                <Button
                  href={service.href}
                  variant="outline"
                  className="w-full justify-center rounded-full"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-section-gradient py-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-text-primary/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-white p-8 rounded-2xl shadow-card hover:shadow-hover transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-2xl font-heading font-bold text-primary">
                    {testimonial.author[0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-text-primary">
                    {testimonial.author}
                  </h4>
                  <p className="text-text-primary/60">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-text-primary/80 italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex text-primary">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Ready for Cleaner, Fresher Carpets?
          </h2>
          <p className="text-xl text-text-primary/80 mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote and experience the CarpetCozy difference!
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="bg-white text-text-primary hover:bg-text-primary hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full text-lg px-12 py-6"
          >
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </>
  );
}

// Data
const features = [
  {
    title: "Trusted & Professional",
    description: "With years of experience, we deliver exceptional results that keep our customers coming back.",
    icon: (
      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Solutions",
    description: "We use green cleaning products that are safe for your family, pets, and the environment.",
    icon: (
      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Fast & Efficient",
    description: "Our efficient process minimizes disruption to your home or business with quick dry times.",
    icon: (
      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Residential Carpet Cleaning",
    description: "Deep cleaning service for homes that removes dirt, stains, and allergens from your carpets.",
    image: "/images/residential.jpg",
    href: "/services/residential",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Commercial Carpet Cleaning",
    description: "Professional cleaning solutions for offices, retail spaces, and other commercial properties.",
    image: "/images/commercial.jpeg",
    href: "/services/commercial",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Pet Stain & Odor Removal",
    description: "Specialized treatments to eliminate pet stains and odors from your carpets and upholstery.",
    image: "/images/pet.webp",
    href: "/services/pet-stain-removal",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "CarpetCozy did an amazing job on our carpets. They looked brand new after the cleaning, and the technician was professional and friendly.",
    author: "Sarah Johnson",
    location: "Roseville",
    rating: 5,
  },
  {
    quote: "I was impressed with how quickly they were able to remove all the stains from our office carpets. Great service at a reasonable price!",
    author: "Michael Rodriguez",
    location: "Rocklin",
    rating: 5,
  },
  {
    quote: "We've tried other carpet cleaners in the past, but none compare to CarpetCozy. They're now our go-to for all our carpet cleaning needs.",
    author: "Jennifer Lewis",
    location: "Folsom",
    rating: 4,
  },
];
