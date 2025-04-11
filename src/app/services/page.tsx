import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";

export const metadata = {
  title: "Our Services | CarpetCozy - Professional Carpet Cleaning",
  description: "Explore our comprehensive carpet cleaning services including residential, commercial, stain removal, pet odor treatment, and more in Roseville and surrounding areas.",
  keywords: "carpet cleaning services, residential carpet cleaning, commercial carpet cleaning, stain removal, pet odor treatment, upholstery cleaning, Roseville",
};

export default function ServicesPage() {
  return (
    <>
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
              src="/images/services-hero.jpg" // Use Services page specific image
              alt="Our Professional Cleaning Services"
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
              Our Professional Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow">
              Explore our comprehensive range of cleaning solutions for carpets, upholstery, tile, and more.
            </p>
            {/* Buttons removed for this page, can be added if needed */}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section title="Professional Carpet Cleaning Services" subtitle="We offer a wide range of carpet cleaning services to meet all your needs">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Residential Carpet Cleaning" 
            description="Revitalize your home carpets with our thorough cleaning process that eliminates dirt, stains, and allergens."
            image="/images/service-residential.jpg"
            href="/services/residential"
          />
          <ServiceCard 
            title="Commercial Carpet Cleaning" 
            description="Keep your business looking professional with our commercial carpet cleaning services for offices and retail spaces."
            image="/images/service-commercial.jpg"
            href="/services/commercial"
          />
          <ServiceCard 
            title="Pet Stain & Odor Removal" 
            description="Specialized treatments to eliminate tough pet stains and odors, leaving your carpets fresh and clean."
            image="/images/service-pet-stain.jpg"
            href="/services/pet-stain-removal"
          />
          <ServiceCard 
            title="Deep Stain Treatment" 
            description="Advanced techniques to remove stubborn stains like wine, coffee, ink, and more from your carpets."
            image="/images/service-stain-treatment.jpg"
            href="/services/stain-treatment"
          />
          <ServiceCard 
            title="Upholstery Cleaning" 
            description="Professional cleaning for sofas, chairs, ottomans, and other upholstered furniture to remove dirt and stains."
            image="/images/service-upholstery.jpg"
            href="/services/upholstery"
          />
          <ServiceCard 
            title="Area Rug Cleaning" 
            description="Specialized cleaning for delicate area rugs, including wool, silk, and antique rugs."
            image="/images/service-area-rug.jpg"
            href="/services/area-rug"
          />
        </div>
      </Section>

      {/* Process Section */}
      <Section bgColor="gray" title="Our Cleaning Process" subtitle="How we deliver exceptional results every time">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">1</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Inspection</h3>
                  <p className="text-gray-700">
                    We thoroughly inspect your carpets to identify problem areas, stains, and the appropriate cleaning methods.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">2</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Pre-Treatment</h3>
                  <p className="text-gray-700">
                    We apply a pre-treatment solution to break down dirt and stains before the main cleaning process.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">3</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Deep Cleaning</h3>
                  <p className="text-gray-700">
                    Using hot water extraction (steam cleaning), we deep clean your carpets to remove dirt, allergens, and bacteria.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">4</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Spot Treatment</h3>
                  <p className="text-gray-700">
                    We address any remaining stubborn stains with specialized spot treatments.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">5</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Drying</h3>
                  <p className="text-gray-700">
                    We use high-powered equipment to reduce drying time, leaving your carpets ready to use in just a few hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 order-1 md:order-2">
            <Image 
              src="/images/cleaning-process.jpg" 
              alt="Carpet cleaning process" 
              fill 
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Frequently Asked Questions" subtitle="Find answers to common questions about our carpet cleaning services">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long will it take my carpets to dry?</h3>
              <p className="text-gray-700">
                Most carpets dry within 2-6 hours. Drying time can vary based on carpet type, humidity, and air circulation in your home.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Are your cleaning products safe for children and pets?</h3>
              <p className="text-gray-700">
                Yes, we use eco-friendly, non-toxic cleaning solutions that are safe for your entire family, including children and pets.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How often should I have my carpets professionally cleaned?</h3>
              <p className="text-gray-700">
                For most homes, we recommend professional cleaning every 12-18 months. Homes with high traffic, children, or pets may benefit from more frequent cleaning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you remove all stains from my carpet?</h3>
              <p className="text-gray-700">
                We can remove most stains, but some permanent stains (like bleach or certain dyes) may not be completely removable. We'll assess your specific stains during our inspection.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do I need to move my furniture before you arrive?</h3>
              <p className="text-gray-700">
                For best results, we recommend removing small items. We can move larger furniture pieces as part of our service at no extra charge.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Areas Preview */}
      {/* Explicitly set textColor to dark for better contrast on light blue background */}
      <Section bgColor="blue" textColor="dark" title="Service Areas" subtitle="We proudly serve Roseville and surrounding communities">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Link href="/areas/roseville" className="bg-white p-4 rounded-md text-center hover:bg-blue-50 transition-colors">
            <h3 className="font-bold text-blue-600">Roseville</h3>
          </Link>
          <Link href="/areas/rocklin" className="bg-white p-4 rounded-md text-center hover:bg-blue-50 transition-colors">
            <h3 className="font-bold text-blue-600">Rocklin</h3>
          </Link>
          <Link href="/areas/loomis" className="bg-white p-4 rounded-md text-center hover:bg-blue-50 transition-colors">
            <h3 className="font-bold text-blue-600">Loomis</h3>
          </Link>
          <Link href="/areas/folsom" className="bg-white p-4 rounded-md text-center hover:bg-blue-50 transition-colors">
            <h3 className="font-bold text-blue-600">Folsom</h3>
          </Link>
          <Link href="/areas/citrus-heights" className="bg-white p-4 rounded-md text-center hover:bg-blue-50 transition-colors">
            <h3 className="font-bold text-blue-600">Citrus Heights</h3>
          </Link>
          <Link href="/areas/granite-bay" className="bg-white p-4 rounded-md text-center hover:bg-blue-50 transition-colors">
            <h3 className="font-bold text-blue-600">Granite Bay</h3>
          </Link>
          <Link href="/areas/auburn" className="bg-white p-4 rounded-md text-center hover:bg-blue-50 transition-colors">
            <h3 className="font-bold text-blue-600">Auburn</h3>
          </Link>
          <Link href="/areas/grass-valley" className="bg-white p-4 rounded-md text-center hover:bg-blue-50 transition-colors">
            <h3 className="font-bold text-blue-600">Grass Valley</h3>
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Button href="/areas" variant="outline" className="border-white text-white hover:bg-white/10">
            View All Service Areas
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Rejuvenate Your Carpets?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote on any of our professional carpet cleaning services!
          </p>
          <Button 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            size="lg"
          >
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </>
  );
} 