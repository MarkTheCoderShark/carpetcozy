import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard"; // May use later for related services

export const metadata = {
  title: "El Dorado Hills Carpet Cleaning | CarpetCozy - Top-Rated Local Service",
  description: "Expert carpet cleaning in El Dorado Hills from CarpetCozy. We use eco-friendly hot water extraction to remove stains, allergens & odors. Free estimates, satisfaction guaranteed!",
  keywords: "carpet cleaning El Dorado Hills CA, El Dorado Hills carpet cleaners, best carpet cleaning in El Dorado Hills, residential carpet cleaning El Dorado Hills, professional carpet cleaning El Dorado Hills, steam cleaning El Dorado Hills, pet stain removal El Dorado Hills, eco-friendly carpet cleaning",
};

export default function ElDoradoHillsCarpetCleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-blue-800 text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative h-full">
            <Image 
              src="/images/hero-carpet.jpg" // Consider an El Dorado Hills-specific image if available
              alt="Professional carpet cleaning in El Dorado Hills, CA" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">El Dorado Hills Carpet Cleaning Experts</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            #1 trusted carpet cleaning service for homes & businesses throughout El Dorado Hills
          </p>
          <Button href="/contact" size="lg">Get Your Free Quote Today</Button>
        </div>
      </section>

      {/* Main Content Section */}
      <Section title="Professional Carpet Cleaning in El Dorado Hills, CA">
        <div className="max-w-4xl mx-auto text-lg">
          <p className="mb-6">
            CarpetCozy provides top-rated professional carpet cleaning services across <strong>El Dorado Hills, CA</strong>. Our expert technicians are equipped with advanced equipment and eco-friendly solutions to deliver exceptional results for your home or business.
          </p>
          <p className="mb-6">
            We understand that El Dorado Hills homeowners expect the best, which is why we use state-of-the-art hot water extraction (steam cleaning) methods that penetrate deep into carpet fibers to remove embedded dirt, allergens, stains, and odors effectively. Our cleaning process is thorough yet gentle, preserving your carpet's integrity while delivering a fresh, clean appearance.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Our El Dorado Hills Carpet Cleaning Services Include:</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li><strong>Residential carpet cleaning</strong> - Deep cleaning for all carpeted areas in your El Dorado Hills home</li>
            <li><strong>Commercial carpet cleaning</strong> - Maintaining a professional appearance for your El Dorado Hills business</li>
            <li><strong>Hot water extraction</strong> - Our preferred method for deep, thorough cleaning</li>
            <li><strong>Pet stain and odor removal</strong> - Specialized treatments for stubborn pet accidents</li>
            <li><strong>Stain treatment</strong> - Targeted solutions for tough spots and spills</li>
            <li><strong>Eco-friendly cleaning</strong> - Safe for your family, pets, and the environment</li>
          </ul>
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Why El Dorado Hills Residents Choose CarpetCozy</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>Experienced, background-checked technicians who know El Dorado Hills neighborhoods</li>
            <li>Eco-friendly, non-toxic cleaning solutions safe for families & pets</li>
            <li>Advanced equipment for superior extraction and faster drying times</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>Flexible scheduling for El Dorado Hills homes and businesses</li>
            <li>100% satisfaction guarantee</li>
          </ul>
          <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Serving All El Dorado Hills Neighborhoods</h3>
            <p className="mb-2">We proudly provide carpet cleaning services throughout El Dorado Hills, including:</p>
            <p className="text-gray-700">Serrano, Blackstone, Lake Hills, Marina Village, Woodridge, Highland View, Stonegate, Highland Hills, Crown Valley, Governor's Village, and all surrounding communities.</p>
          </div>
          <div className="text-center mt-8">
             <Button href="/contact" variant="primary" size="lg">Schedule Your El Dorado Hills Cleaning</Button>
          </div>
        </div>
      </Section>

      {/* FAQ Section - Great for SEO */}
      <Section title="El Dorado Hills Carpet Cleaning FAQs">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold mb-2">How often should I have my carpets professionally cleaned in El Dorado Hills?</h3>
              <p>For most El Dorado Hills homes, we recommend professional carpet cleaning at least once every 12-18 months. However, households with pets, children, allergies, or high traffic may benefit from more frequent cleanings, approximately every 6-9 months.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold mb-2">How long will it take my carpets to dry after cleaning?</h3>
              <p>Thanks to our advanced equipment that provides superior extraction, most El Dorado Hills homes will experience dry carpets within 4-6 hours. Drying time may vary depending on humidity levels, air circulation, and carpet thickness.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold mb-2">Are your cleaning solutions safe for pets and children in El Dorado Hills homes?</h3>
              <p>Absolutely! We use eco-friendly, non-toxic cleaning solutions that are safe for all family members, including pets. Our products effectively clean while being gentle on both your carpets and the environment.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold mb-2">Do you offer same-day carpet cleaning in El Dorado Hills?</h3>
              <p>When possible, we accommodate same-day service requests for El Dorado Hills residents. We recommend calling early in the day to check availability for urgent cleaning needs.</p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Fresh, Clean Carpets in El Dorado Hills Today!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready for cleaner, fresher carpets? Contact CarpetCozy for your free estimate and experience the difference our professional carpet cleaning makes in your El Dorado Hills home or business.
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            size="lg"
          >
            Request a Free Quote Now
          </Button>
        </div>
      </section>
    </>
  );
}