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
          {/* Removed dark overlays */}

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
          <div className="max-w-4xl mx-auto p-8 rounded-lg text-text-primary"> {/* Removed bg/blur, set text color */}
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
      <Section title="Professional Carpet Cleaning Services" subtitle="We offer a wide range of carpet cleaning services to meet all your needs"> {/* Assumes default bg */}
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
      <Section bgColor="alt" title="Our Cleaning Process" subtitle="How we deliver exceptional results every time"> {/* Updated bgColor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-text-primary font-bold">1</div> {/* Updated colors */}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-text-primary">Inspection</h3> {/* Updated color */}
                  <p className="text-text-primary/80"> {/* Updated color */}
                    We thoroughly inspect your carpets to identify problem areas, stains, and the appropriate cleaning methods.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-text-primary font-bold">2</div> {/* Updated colors */}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-text-primary">Pre-Treatment</h3> {/* Updated color */}
                  <p className="text-text-primary/80"> {/* Updated color */}
                    We apply a pre-treatment solution to break down dirt and stains before the main cleaning process.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-text-primary font-bold">3</div> {/* Updated colors */}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-text-primary">Deep Cleaning</h3> {/* Updated color */}
                  <p className="text-text-primary/80"> {/* Updated color */}
                    Using hot water extraction (steam cleaning), we deep clean your carpets to remove dirt, allergens, and bacteria.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-text-primary font-bold">4</div> {/* Updated colors */}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-text-primary">Spot Treatment</h3> {/* Updated color */}
                  <p className="text-text-primary/80"> {/* Updated color */}
                    We address any remaining stubborn stains with specialized spot treatments.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-text-primary font-bold">5</div> {/* Updated colors */}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-text-primary">Drying</h3> {/* Updated color */}
                  <p className="text-text-primary/80"> {/* Updated color */}
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
              className="object-cover rounded-lg shadow-subtle" // Updated shadow
            />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bgColor="faq" title="Frequently Asked Questions" subtitle="Find answers to common questions about our carpet cleaning services"> {/* Use FAQ background */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-xl shadow-md"> {/* White card on FAQ bg, rounded-xl, shadow-md */}
              <h3 className="text-xl font-bold mb-2">How long will it take my carpets to dry?</h3>
              <p className="text-text-primary/80"> {/* Updated color */}
                Most carpets dry within 2-6 hours. Drying time can vary based on carpet type, humidity, and air circulation in your home.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-md"> {/* White card on FAQ bg, rounded-xl, shadow-md */}
              <h3 className="text-xl font-bold mb-2">Are your cleaning products safe for children and pets?</h3>
              <p className="text-text-primary/80"> {/* Updated color */}
                Yes, we use eco-friendly, non-toxic cleaning solutions that are safe for your entire family, including children and pets.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-md"> {/* White card on FAQ bg, rounded-xl, shadow-md */}
              <h3 className="text-xl font-bold mb-2">How often should I have my carpets professionally cleaned?</h3>
              <p className="text-text-primary/80"> {/* Updated color */}
                For most homes, we recommend professional cleaning every 12-18 months. Homes with high traffic, children, or pets may benefit from more frequent cleaning.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-md"> {/* White card on FAQ bg, rounded-xl, shadow-md */}
              <h3 className="text-xl font-bold mb-2">Can you remove all stains from my carpet?</h3>
              <p className="text-text-primary/80"> {/* Updated color */}
                We can remove most stains, but some permanent stains (like bleach or certain dyes) may not be completely removable. We'll assess your specific stains during our inspection.
              </p>
            </div>
            
            <div className="bg-background-alt p-6 rounded-lg shadow-subtle"> {/* Updated styles */}
              <h3 className="text-xl font-bold mb-2">Do I need to move my furniture before you arrive?</h3>
              <p className="text-text-primary/80"> {/* Updated color */}
                For best results, we recommend removing small items. We can move larger furniture pieces as part of our service at no extra charge.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Areas Preview */}
      {/* Explicitly set textColor to dark for better contrast on light blue background */}
      <Section bgColor="alt" title="Service Areas" subtitle="We proudly serve Roseville and surrounding communities"> {/* Changed to alt background */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Link href="/areas/roseville" className="bg-background p-4 rounded-lg text-center shadow-subtle hover:shadow-md transition-all"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Roseville</h3> {/* Updated color */}
          </Link>
          <Link href="/areas/rocklin" className="bg-background p-4 rounded-lg text-center shadow-subtle hover:shadow-md transition-all"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Rocklin</h3> {/* Updated color */}
          </Link>
          <Link href="/areas/loomis" className="bg-background p-4 rounded-lg text-center shadow-subtle hover:shadow-md transition-all"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Loomis</h3> {/* Updated color */}
          </Link>
          <Link href="/areas/folsom" className="bg-background p-4 rounded-lg text-center shadow-subtle hover:shadow-md transition-all"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Folsom</h3> {/* Updated color */}
          </Link>
          <Link href="/areas/citrus-heights" className="bg-background p-4 rounded-lg text-center shadow-subtle hover:shadow-md transition-all"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Citrus Heights</h3> {/* Updated color */}
          </Link>
          <Link href="/areas/granite-bay" className="bg-background p-4 rounded-lg text-center shadow-subtle hover:shadow-md transition-all"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Granite Bay</h3> {/* Updated color */}
          </Link>
          <Link href="/areas/auburn" className="bg-background p-4 rounded-lg text-center shadow-subtle hover:shadow-md transition-all"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Auburn</h3> {/* Updated color */}
          </Link>
          <Link href="/areas/grass-valley" className="bg-background p-4 rounded-lg text-center shadow-subtle hover:shadow-md transition-all"> {/* Updated styles */}
            <h3 className="font-bold text-text-primary">Grass Valley</h3> {/* Updated color */}
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Button href="/areas" variant="secondary"> {/* Use secondary variant */}
            View All Service Areas
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-primary text-text-primary py-16"> {/* Updated background and text */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Rejuvenate Your Carpets?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote on any of our professional carpet cleaning services!
          </p>
          <Button href="/contact" variant="secondary" size="lg"> {/* Use secondary variant */}
            Get Your Free Quote
          </Button>




        </div>
      </section>
    </>
  );
} 