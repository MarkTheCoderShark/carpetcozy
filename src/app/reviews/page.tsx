import { Metadata } from 'next';
import Section from '@/components/ui/Section'; // Assuming Section component exists
import TestimonialCard from '@/components/ui/TestimonialCard'; // Assuming TestimonialCard component exists

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | CarpetCozy Carpet Cleaning',
  description: 'Read reviews from satisfied CarpetCozy customers in Roseville, Rocklin, Folsom, and surrounding areas. See why we are the trusted choice for carpet cleaning.',
  keywords: ['carpet cleaning reviews', 'customer testimonials', 'carpet cozy reviews', 'roseville carpet cleaning', 'rocklin carpet cleaning', 'folsom carpet cleaning'],
};

// Placeholder Review Data
const reviews = [
  {
    name: "Sarah L.",
    location: "Roseville, CA",
    rating: 5,
    text: "CarpetCozy did an amazing job! Our carpets look brand new. The technician was professional, punctual, and very thorough. Highly recommend!",
    image: "/images/team-1.jpg" // Placeholder image
  },
  {
    name: "Mark T.",
    location: "Rocklin, CA",
    rating: 5,
    text: "Fantastic service from start to finish. They removed tough pet stains I thought were permanent. Fair pricing and excellent results.",
    image: "/images/team-2.jpg" // Placeholder image
  },
  {
    name: "Jennifer P.",
    location: "Folsom, CA",
    rating: 5,
    text: "We used CarpetCozy for our office carpets, and the difference is night and day. Efficient, professional, and great value. Will definitely use them again.",
    image: "/images/team-3.jpg" // Placeholder image
  },
   {
    name: "David R.",
    location: "Granite Bay, CA",
    rating: 4,
    text: "Very happy with the upholstery cleaning. Our couch looks refreshed and smells great. The team was friendly and careful with our furniture.",
    image: null // Example without image
  },
  {
    name: "Emily C.",
    location: "Citrus Heights, CA",
    rating: 5,
    text: "Called CarpetCozy for an emergency spill, and they were able to come out quickly. They saved our area rug! Lifesavers!",
    image: "/images/team-1.jpg" // Placeholder image
  },
  {
    name: "Michael B.",
    location: "Loomis, CA",
    rating: 5,
    text: "Consistently great service. We've used them multiple times for our home carpets, and they always deliver top-notch results. Trustworthy and reliable.",
    image: "/images/team-2.jpg" // Placeholder image
  }
];

export default function ReviewsPage() {
  return (
    <>
      <Section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Hear From Our Happy Customers
          </h1>
          <p className="text-lg text-center text-gray-600 mb-10 md:mb-16 max-w-3xl mx-auto">
            At CarpetCozy, customer satisfaction is our top priority. We take pride in delivering exceptional carpet cleaning results and outstanding service across the Greater Sacramento area. Read what some of our valued clients have to say about their experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <TestimonialCard
                key={index}
                author={review.name} // Corrected prop
                location={review.location}
                rating={review.rating}
                quote={review.text} // Corrected prop
                authorImage={review.image ?? undefined} // Corrected prop: Convert null to undefined
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-20">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary">
                Ready for Spotless Carpets?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Experience the CarpetCozy difference for yourself! We offer reliable, high-quality carpet cleaning services tailored to your needs. Get a free quote today and join our family of satisfied customers.
            </p>
            {/* Assuming Button component exists and takes href */}
            {/* <Button href="/contact" variant="primary" size="lg">Get Your Free Quote</Button> */}
             <a href="/contact" className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300">
                Get Your Free Quote
             </a>
         </div>
      </Section>
    </>
  );
}