import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Roseville Commercial Carpet Cleaning | Office & Retail | CarpetCozy",
  description: "Professional commercial carpet cleaning services in Roseville, CA. We clean offices, retail spaces, and businesses near Galleria Mall & Eureka Rd. Flexible scheduling!",
  keywords: "commercial carpet cleaning Roseville, office carpet cleaning Roseville, commercial floor cleaning Roseville, business carpet cleaning Roseville, retail carpet cleaning Roseville",
};

export default function RosevilleCommercialCarpetCleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gray-800 text-white flex items-center"> {/* Neutral dark color */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative h-full">
            <Image 
              src="/images/service-commercial.jpg" // Use commercial image
              alt="Commercial carpet cleaning for offices and businesses in Roseville, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roseville Commercial Carpet Cleaning</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Maintain a professional image with reliable carpet cleaning for your Roseville business.
          </p>
          <Button href="/contact" size="lg">Get a Commercial Quote</Button>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Professional Carpet Care for Roseville Businesses">
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            First impressions matter. Ensure your Roseville business always looks its best with commercial carpet cleaning services from CarpetCozy. We provide reliable, high-quality carpet care for offices, retail stores, restaurants, and other commercial properties throughout Roseville.
          </p>
          <p className="mb-6">
            We understand the unique needs of businesses, from high-traffic areas in retail spaces near the <strong className="font-semibold">Galleria Mall</strong> to professional offices off <strong className="font-semibold">Eureka Rd</strong>. Our team uses durable, commercial-grade equipment and effective cleaning solutions to tackle tough dirt and stains, extending the life of your carpets and creating a healthier environment for your employees and customers.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Why Roseville Businesses Choose CarpetCozy:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li><strong className="font-semibold">Flexible Scheduling:</strong> We offer <strong className="font-semibold">after-hours and weekend appointments</strong> to minimize disruption to your operations.</li>
            <li><strong className="font-semibold">Customized Cleaning Plans:</strong> Tailored services to meet the specific needs and budget of your business.</li>
            <li><strong className="font-semibold">Experienced Technicians:</strong> Trained professionals equipped to handle commercial carpets and high-traffic areas.</li>
            <li><strong className="font-semibold">Fast Drying Times:</strong> Our process allows for quicker drying, getting your space back to normal faster.</li>
            <li><strong className="font-semibold">Competitive Commercial Rates:</strong> Affordable pricing for ongoing maintenance or one-time deep cleans.</li>
            <li><strong className="font-semibold">Insured and Reliable:</strong> Peace of mind knowing you're working with a professional company.</li>
          </ul>
          <div className="text-center mt-8">
             <Button href="/contact" variant="primary" size="lg">Schedule Your Commercial Cleaning</Button>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16"> {/* Neutral dark color */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep Your Roseville Business Looking Sharp!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact CarpetCozy today for a free, no-obligation quote for your commercial carpet cleaning needs in Roseville.
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-gray-800 hover:bg-gray-100" // Adjusted color
            size="lg"
          >
            Request Your Free Commercial Quote
          </Button>
        </div>
      </section>
    </>
  );
}