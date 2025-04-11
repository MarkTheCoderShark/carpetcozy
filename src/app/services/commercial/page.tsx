import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Commercial Carpet Cleaning | CarpetCozy - Roseville Businesses",
  description: "Professional commercial carpet cleaning for offices, retail spaces, and businesses in Roseville. Maintain a clean and professional environment with CarpetCozy.",
  keywords: "commercial carpet cleaning, office carpet cleaning, business carpet cleaning, carpet cleaning Roseville, CarpetCozy",
};

export default function CommercialServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-indigo-700 text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service-commercial.jpg" 
            alt="Clean office carpet" 
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Carpet Cleaning</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Professional cleaning solutions to keep your business looking its best.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Maintain a Professional Image" subtitle="Reliable carpet cleaning for your business">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <h3 className="text-2xl font-bold mb-4">Expert Cleaning for Offices & Retail Spaces</h3>
            <p className="text-gray-700 mb-4">
              First impressions matter in business. CarpetCozy provides top-tier commercial carpet cleaning services tailored to the unique needs of offices, retail stores, restaurants, and other commercial properties in the Roseville area. We understand the importance of minimizing disruption to your operations.
            </p>
            <p className="text-gray-700 mb-6">
              Our powerful cleaning technology effectively removes heavy foot traffic dirt, spills, and grime, ensuring your carpets are clean, presentable, and contribute to a healthier environment for your employees and customers. We offer flexible scheduling, including after-hours and weekends.
            </p>
            <h4 className="text-xl font-semibold mb-3">Why Choose CarpetCozy for Your Business:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Enhances your business's professional appearance.</li>
              <li>Removes tough dirt from high-traffic areas.</li>
              <li>Improves indoor air quality for staff and clients.</li>
              <li>Flexible scheduling to minimize business disruption.</li>
              <li>Customized cleaning plans available.</li>
              <li>Competitive pricing for commercial accounts.</li>
            </ul>
            <Button href="/contact?service=commercial" className="mr-4">Request a Commercial Quote</Button>
            <Button href="/services" variant="outline">Back to Services</Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
            <Image 
              src="/images/about-hero.jpg" // Consider a different commercial-related image
              alt="Professional office environment" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Industries Served (Optional) */}
      <Section title="Serving Various Industries" bgColor="gray">
         <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">We provide commercial carpet cleaning for a wide range of businesses, including offices, retail stores, medical facilities, educational institutions, hospitality venues, and more.</p>
         {/* Maybe add logos or icons here later */}
      </Section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Elevate Your Business Environment?</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Ensure your commercial space reflects professionalism. Contact CarpetCozy for reliable carpet cleaning services.
          </p>
          <Button href="/contact?service=commercial" className="bg-white text-indigo-600 hover:bg-gray-100" size="lg">
            Get Your Commercial Quote Today
          </Button>
        </div>
      </section>
    </>
  );
}