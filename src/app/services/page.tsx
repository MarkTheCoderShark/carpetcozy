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
      <section
        className="hero relative bg-cover bg-center pt-32 pb-24 min-h-[500px]" // Added padding, bg-cover, bg-center
        style={{ backgroundImage: "url('/hero.png')" }} // Use inline style for background
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

        {/* Removed the separate Image component */}
        {/* Content Container */}
        
        {/* Centered the container and text */}
        {/* Added pt-24 (header height) + extra padding */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
            Our Professional Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-primary/80">
            Explore our comprehensive range of cleaning solutions for carpets, upholstery, tile, and more.
          </p>
          {/* Buttons removed for this page */}
        </div> {/* End Content Container */}
      </section>

      {/* Services Overview */}
      <Section title="Professional Carpet Cleaning Services" subtitle="We offer a wide range of carpet cleaning services to meet all your needs"> {/* Assumes default bg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Residential Carpet Cleaning" 
            description="Revitalize your home carpets with our thorough cleaning process that eliminates dirt, stains, and allergens."
            image="/images/residential.jpg"
            href="/services/residential"
          />
          <ServiceCard 
            title="Commercial Carpet Cleaning" 
            description="Keep your business looking professional with our commercial carpet cleaning services for offices and retail spaces."
            image="/images/commercial.jpeg"
            href="/services/commercial"
          />
          <ServiceCard 
            title="Pet Stain & Odor Removal" 
            description="Specialized treatments to eliminate tough pet stains and odors, leaving your carpets fresh and clean."
            image="/images/pet.webp"
            href="/services/pet-stain-removal"
          />
          <ServiceCard 
            title="Deep Stain Treatment" 
            description="Advanced techniques to remove stubborn stains like wine, coffee, ink, and more from your carpets."
            image="/images/deepstain.jpeg"
            href="/services/stain-treatment"
          />
          <ServiceCard 
            title="Upholstery Cleaning" 
            description="Professional cleaning for sofas, chairs, ottomans, and other upholstered furniture to remove dirt and stains."
            image="/images/upholstery.jpg"
            href="/services/upholstery"
          />
          <ServiceCard 
            title="Area Rug Cleaning" 
            description="Specialized cleaning for delicate area rugs, including wool, silk, and antique rugs."
            image="/images/arearug.jpg"
            href="/services/area-rug"
          />
        </div>
      </Section>

      {/* Process Section */}
      <Section bgColor="alt" title="Our Cleaning Process" subtitle="How we deliver exceptional results every time">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Step 1 */}
          <div className="bg-background rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="bg-primary w-16 h-16 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-background">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-text-primary">Inspection</h3>
            <p className="text-text-primary/80">
              We thoroughly inspect your carpets to identify problem areas, stains, and the appropriate cleaning methods.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-background rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="bg-primary w-16 h-16 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-background">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-text-primary">Pre-Treatment</h3>
            <p className="text-text-primary/80">
              We apply a pre-treatment solution to break down dirt and stains before the main cleaning process.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-background rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="bg-primary w-16 h-16 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-background">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-text-primary">Deep Cleaning</h3>
            <p className="text-text-primary/80">
              Using hot water extraction (steam cleaning), we deep clean your carpets to remove dirt, allergens, and bacteria.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="bg-background rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="bg-primary w-16 h-16 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-background">4</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-text-primary">Spot Treatment</h3>
            <p className="text-text-primary/80">
              We address any remaining stubborn stains with specialized spot treatments.
            </p>
          </div>
          
          {/* Step 5 */}
          <div className="bg-background rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="bg-primary w-16 h-16 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-background">5</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-text-primary">Drying</h3>
            <p className="text-text-primary/80">
              We use high-powered equipment to reduce drying time, leaving your carpets ready to use in just a few hours.
            </p>
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
            
            <div className="bg-background p-6 rounded-xl shadow-md"> {/* White card on FAQ bg, rounded-xl, shadow-md */}
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

      {/* CTA Section - Refactored to use Section component */}
      <Section bgColor="dark" textColor="light"> {/* Use dark brown bg, light text */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Rejuvenate Your Carpets?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-background/80"> {/* Muted light text */}
            Contact us today for a free quote on any of our professional carpet cleaning services!
          </p>
          <Button href="/contact" variant="secondary" size="lg" className="text-text-primary bg-background hover:bg-background/90"> {/* Secondary button with light text on dark bg */}
            Get Your Free Quote
          </Button>
        </div>
      </Section>
    </>
  );
} 