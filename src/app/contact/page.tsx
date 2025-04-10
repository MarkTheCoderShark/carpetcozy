import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Contact Us | CarpetCozy - Professional Carpet Cleaning",
  description: "Contact CarpetCozy for professional carpet cleaning services in Roseville and surrounding areas. Get a free quote or schedule a cleaning service today.",
  keywords: "contact carpet cleaner, carpet cleaning quote, Roseville carpet cleaning service, schedule carpet cleaning, carpet cleaning phone number",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-blue-800 text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative h-full">
            <Image 
              src="/images/contact-hero.jpg" 
              alt="Contact CarpetCozy" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Get in touch with our friendly team to schedule a service or request a free quote.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-gray-700 font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-gray-700 font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a Service</option>
                  <option value="residential">Residential Carpet Cleaning</option>
                  <option value="commercial">Commercial Carpet Cleaning</option>
                  <option value="pet-stain">Pet Stain & Odor Removal</option>
                  <option value="stain-treatment">Deep Stain Treatment</option>
                  <option value="upholstery">Upholstery Cleaning</option>
                  <option value="area-rug">Area Rug Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your needs or ask any questions..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-700">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-700">info@carpetcozy.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Address</h3>
                  <p className="text-gray-700">
                    123 Carpet Way<br />
                    Roseville, CA 95678
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.589 6.686a4.93 4.93 0 00-3.351-4.128 4.928 4.928 0 00-5.33 1.075 4.935 4.935 0 00-1.345 3.312 4.935 4.935 0 00-1.7-3.042 4.928 4.928 0 00-5.461-.894 4.928 4.928 0 00-2.323 2.397 4.93 4.93 0 001.055 5.452l8.11 8.11 8.345-8.345c.913-.913 2.215-2.205 2.215-3.939 0-.166-.014-.33-.04-.492a4.929 4.929 0 00-.175-.505zM5.5 9a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm13 0a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <section className="h-96 relative">
        <div className="absolute inset-0 z-0">
          {/* Replace with actual Google Maps embed */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Google Maps Embed</p>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <Section bgColor="blue" title="Service Areas" subtitle="We proudly serve Roseville and surrounding communities">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-md text-center">
            <h3 className="font-bold text-blue-600">Roseville</h3>
          </div>
          <div className="bg-white p-4 rounded-md text-center">
            <h3 className="font-bold text-blue-600">Rocklin</h3>
          </div>
          <div className="bg-white p-4 rounded-md text-center">
            <h3 className="font-bold text-blue-600">Loomis</h3>
          </div>
          <div className="bg-white p-4 rounded-md text-center">
            <h3 className="font-bold text-blue-600">Folsom</h3>
          </div>
          <div className="bg-white p-4 rounded-md text-center">
            <h3 className="font-bold text-blue-600">Citrus Heights</h3>
          </div>
          <div className="bg-white p-4 rounded-md text-center">
            <h3 className="font-bold text-blue-600">Granite Bay</h3>
          </div>
          <div className="bg-white p-4 rounded-md text-center">
            <h3 className="font-bold text-blue-600">Auburn</h3>
          </div>
          <div className="bg-white p-4 rounded-md text-center">
            <h3 className="font-bold text-blue-600">Grass Valley</h3>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button href="/areas" variant="outline" className="border-white text-white hover:bg-white/10">
            View All Service Areas
          </Button>
        </div>
      </Section>
    </>
  );
} 