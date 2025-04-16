import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";

export const metadata = {
  title: "Commercial Carpet Cleaning in Granite Bay | CarpetCozy - Professional Business Services",
  description: "Professional commercial carpet cleaning services in Granite Bay, CA. Maintain a clean, professional business environment with CarpetCozy's specialized commercial cleaning solutions.",
  keywords: "commercial carpet cleaning Granite Bay CA, business carpet cleaning Granite Bay, professional commercial cleaning Granite Bay, office carpet cleaning, retail carpet cleaning, Granite Bay business cleaning",
};

export default function GraniteBayCommercialCarpetCleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-blue-800 text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative h-full">
            <Image 
              src="/images/commercial-carpet.jpg" 
              alt="Professional commercial carpet cleaning in Granite Bay, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Carpet Cleaning in Granite Bay</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Specialized cleaning solutions for businesses, offices, retail spaces & commercial properties
          </p>
          <Button href="/contact" size="lg">Request a Commercial Quote</Button>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Professional Commercial Carpet Cleaning for Granite Bay Businesses">
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            CarpetCozy provides premium commercial carpet cleaning services throughout <strong>Granite Bay, CA</strong>. Our expert technicians understand the unique challenges businesses face with high-traffic areas, maintaining a professional appearance, and creating healthy environments for employees and customers.
          </p>
          <p className="mb-6">
            We work with a wide range of commercial clients in Granite Bay, including offices, retail stores, restaurants, medical facilities, and educational institutions. Our commercial carpet cleaning services are tailored to meet the specific needs of your business while minimizing disruption to your operations.
          </p>
          
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Commercial Cleaning Services</h2>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>Office carpet cleaning</strong> with minimal disruption</li>
                <li><strong>Retail space cleaning</strong> for high-traffic areas</li>
                <li><strong>Restaurant and hospitality</strong> specialized solutions</li>
                <li><strong>Medical facility cleaning</strong> with sanitation focus</li>
                <li><strong>Educational institution</strong> scheduled maintenance</li>
                <li><strong>Industrial space</strong> heavy-duty cleaning</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Commercial Approach</h2>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>Customized cleaning plans</strong> for your business needs</li>
                <li><strong>Flexible scheduling</strong> including evenings and weekends</li>
                <li><strong>Fast-drying techniques</strong> to minimize downtime</li>
                <li><strong>Spotless results</strong> that enhance your business image</li>
                <li><strong>Regular maintenance programs</strong> available</li>
                <li><strong>Green cleaning options</strong> for eco-conscious businesses</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Why Granite Bay Businesses Choose CarpetCozy</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li><strong>Commercial-grade equipment</strong> designed for high-performance cleaning</li>
            <li><strong>Professionally trained technicians</strong> with commercial property experience</li>
            <li><strong>Bonded and insured</strong> for your protection and peace of mind</li>
            <li><strong>Proven cleaning methods</strong> that extend carpet life and appearance</li>
            <li><strong>Flexible scheduling</strong> to accommodate your business hours</li>
            <li><strong>Competitive rates</strong> with transparent pricing</li>
          </ul>
          
          <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Serving All Granite Bay Commercial Areas</h3>
            <p className="mb-2">We provide commercial carpet cleaning services throughout Granite Bay, including:</p>
            <p className="text-gray-700">Granite Bay Business Park, Douglas Boulevard corridor, Quarry Ponds Town Center, Granite Bay Pavilions, and all surrounding commercial districts.</p>
          </div>
          <div className="text-center mt-8">
             <Button href="/contact" variant="primary" size="lg">Schedule Your Commercial Cleaning</Button>
          </div>
        </div>
      </Section>

      {/* Commercial Benefits Section */}
      <Section title="Benefits of Professional Commercial Carpet Cleaning" bgColor="alt">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Enhanced Professional Appearance</h3>
              <p className="text-gray-700">
                First impressions matter in business. Clean, well-maintained carpets create a positive impression for clients, customers, and employees. Our thorough commercial cleaning removes stains, eliminates odors, and restores carpet appearance, helping your Granite Bay business maintain a professional environment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Improved Indoor Air Quality</h3>
              <p className="text-gray-700">
                Commercial carpets trap dust, allergens, and pollutants that can affect air quality and employee health. Our deep cleaning process removes these contaminants, creating a healthier workplace, potentially reducing sick days, and improving overall productivity in your Granite Bay business.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Extended Carpet Lifespan</h3>
              <p className="text-gray-700">
                Regular professional cleaning extends the life of your commercial carpets by removing abrasive dirt particles that wear down fibers. This helps Granite Bay businesses maximize their flooring investment and delay expensive replacement costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Customized Maintenance Plans</h3>
              <p className="text-gray-700">
                Every business has unique needs. We develop customized maintenance plans for Granite Bay businesses based on foot traffic, carpet type, business hours, and budget considerations. Regular scheduled maintenance keeps your carpets consistently clean while being cost-effective.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Commercial Process Section */}
      <Section title="Our Commercial Carpet Cleaning Process">
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-8">
            Our thorough commercial carpet cleaning process is designed to deliver exceptional results while accommodating your business schedule.
          </p>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-blue-800 font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Initial Assessment and Consultation</h3>
                <p className="text-gray-700">
                  We begin with a thorough evaluation of your Granite Bay commercial space, identifying high-traffic areas, stains, and specific concerns. This allows us to create a customized cleaning plan that addresses your business's unique needs.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-blue-800 font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pre-Treatment and Spot Treatment</h3>
                <p className="text-gray-700">
                  We apply specialized pre-treatments to break down soil and prepare the carpet for deep cleaning. Stubborn stains receive targeted spot treatments using commercial-grade solutions formulated for specific stain types.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-blue-800 font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hot Water Extraction Cleaning</h3>
                <p className="text-gray-700">
                  Our commercial-grade equipment delivers powerful hot water extraction (steam cleaning) that penetrates deep into carpet fibers. This process effectively removes embedded dirt, allergens, and cleaning solutions, leaving carpets thoroughly clean.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-blue-800 font-bold">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Speed Drying Techniques</h3>
                <p className="text-gray-700">
                  We understand business continuity is essential. Our powerful extraction equipment removes most moisture during cleaning, and we employ commercial air movers when necessary to accelerate drying time, minimizing disruption to your Granite Bay business.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-blue-800 font-bold">5</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Final Inspection and Recommendations</h3>
                <p className="text-gray-700">
                  We conduct a thorough post-cleaning inspection with you to ensure complete satisfaction. Our team provides maintenance recommendations and scheduling options for ongoing care to keep your commercial carpets looking their best year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section - Great for SEO */}
      <Section title="Commercial Carpet Cleaning FAQs" bgColor="alt">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold mb-2">How often should commercial carpets be professionally cleaned?</h3>
              <p>For most Granite Bay businesses, we recommend professional cleaning every 3-6 months for high-traffic areas and every 6-12 months for lower-traffic areas. Factors that influence frequency include foot traffic volume, presence of food service, weather conditions, and type of business. We can help develop a customized maintenance schedule for your specific needs.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold mb-2">How long will it take my commercial carpets to dry?</h3>
              <p>Most commercial carpets dry within 2-4 hours after our cleaning service. We use powerful extraction equipment that removes the majority of moisture during the cleaning process. For businesses that need to minimize downtime, we offer accelerated drying services utilizing commercial air movers.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold mb-2">Can you clean our carpets outside of business hours?</h3>
              <p>Absolutely! We understand that business continuity is crucial. Many of our Granite Bay commercial clients prefer evening or weekend appointments to avoid disruption to their normal operations. We offer flexible scheduling options including early mornings, evenings, and weekends at no additional charge.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold mb-2">Do you offer maintenance programs for Granite Bay businesses?</h3>
              <p>Yes, we offer customized maintenance programs for Granite Bay businesses of all sizes. These programs can include scheduled deep cleanings, interim maintenance, and spot treatments. Many clients find that regular maintenance is more cost-effective than infrequent deep cleanings and helps maintain a consistently professional appearance.</p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Granite Bay Business Image</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Maintain a professional environment with our commercial carpet cleaning services. Contact CarpetCozy today for a free on-site assessment and customized quote for your Granite Bay business.
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            size="lg"
          >
            Request a Commercial Assessment
          </Button>
        </div>
      </section>
    </>
  );
} 