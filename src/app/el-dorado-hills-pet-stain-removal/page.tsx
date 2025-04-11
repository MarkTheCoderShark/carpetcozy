import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import TestimonialCard from "@/components/ui/TestimonialCard"; // For showcasing testimonials

export const metadata = {
  title: "El Dorado Hills Pet Stain & Odor Removal | Carpet & Upholstery | CarpetCozy",
  description: "Expert pet stain and odor removal services in El Dorado Hills, CA. We eliminate tough pet urine stains and smells from carpets and upholstery. Safe for pets!",
  keywords: "pet stain removal El Dorado Hills, carpet odor treatment El Dorado Hills, remove pet urine carpet El Dorado Hills, pet odor eliminator El Dorado Hills, upholstery pet stain removal El Dorado Hills",
};

export default function ElDoradoHillsPetStainRemovalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-orange-800 text-white flex items-center"> {/* Adjusted color slightly */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative h-full">
            <Image 
              src="/images/service-pet-stain.jpg" // Use pet stain image
              alt="Pet stain and odor removal services in El Dorado Hills, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">El Dorado Hills Pet Stain & Odor Removal</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Say goodbye to stubborn pet accidents! Specialized cleaning for El Dorado Hills pet owners.
          </p>
          <Button href="/contact" size="lg">Get a Pet Treatment Quote</Button>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Effective Solutions for Pet Accidents in El Dorado Hills">
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            We love our pets, but accidents happen. CarpetCozy offers specialized pet stain and odor removal services designed for El Dorado Hills pet owners. Standard cleaning often isn't enough to fully eliminate pet urine stains and the associated odors, which can penetrate deep into carpet fibers and padding.
          </p>
          <p className="mb-6">
            Our technicians use powerful, pet-safe enzymatic cleaners and specialized extraction techniques to break down and remove urine crystals at the source. This process not only removes the visible stain but also neutralizes the odor, discouraging pets from resoiling the same area. We serve pet owners throughout El Dorado Hills.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Our El Dorado Hills Pet Treatment Process:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>UV light detection to pinpoint hidden urine spots</li>
            <li>Application of specialized enzymatic pre-treatment</li>
            <li>Deep hot water extraction to flush contaminants</li>
            <li>Targeted odor neutralizers and deodorizers</li>
            <li>Safe for all carpet types and upholstery fabrics</li>
            <li>Helps prevent permanent damage and discoloration</li>
          </ul>
          <p className="mb-6">
            Don't let pet accidents ruin your carpets or furniture. Trust CarpetCozy for reliable pet stain and odor removal in El Dorado Hills.
          </p>
          <div className="text-center mt-8">
             <Button href="/contact" variant="primary" size="lg">Eliminate Pet Stains & Odors</Button>
          </div>
        </div>
      </Section>

      {/* Testimonials Preview */}
      <Section bgColor="gray" title="What El Dorado Hills Pet Owners Say">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {/* Add 1-2 relevant testimonials here */}
           <TestimonialCard 
             quote="CarpetCozy completely removed the old dog urine stains from our living room carpet! The smell is gone too. Highly recommend for El Dorado Hills pet owners."
             author="Jessica M."
             location="El Dorado Hills"
             rating={5}
           />
           <TestimonialCard 
             quote="Finally found a company that could get the cat smell out of our couch. Professional service and great results."
             author="David R."
             location="El Dorado Hills"
             rating={5}
           />
         </div>
      </Section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16"> {/* Adjusted color */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep Your El Dorado Hills Home Fresh & Clean!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free estimate for pet stain and odor removal. Contact CarpetCozy today!
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-orange-700 hover:bg-gray-100" // Adjusted color
            size="lg"
          >
            Request Your Free Pet Treatment Quote
          </Button>
        </div>
      </section>
    </>
  );
}