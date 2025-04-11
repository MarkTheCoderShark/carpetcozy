"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-alt text-text-primary border-t border-primary/20"> {/* Updated background, text, added border */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image 
                src="/logo.png" // Updated path
                alt="CarpetCozy Logo"
                width={160}
                height={45}
                priority // Added prop
                unoptimized // Added prop
              />
            </div>
            <p className="mb-4 text-text-primary/80">Professional carpet cleaning services in Roseville and surrounding areas.</p> {/* Adjusted text opacity */}
            <div className="space-y-2">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (555) 123-4567
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@carpetcozy.com
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Roseville, CA
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-primary">Quick Links</h3> {/* Updated heading color */}
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition duration-300"> {/* Updated hover color */}
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-primary transition duration-300">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-primary transition duration-300">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-text-primary">Service Areas</h3> {/* Updated heading color */}
            <div className="grid grid-cols-2 gap-2">
              <Link href="/areas/roseville" className="hover:text-primary transition duration-300">
                Roseville
              </Link>
              <Link href="/areas/rocklin" className="hover:text-primary transition duration-300">
                Rocklin
              </Link>
              <Link href="/areas/loomis" className="hover:text-primary transition duration-300">
                Loomis
              </Link>
              <Link href="/areas/folsom" className="hover:text-primary transition duration-300">
                Folsom
              </Link>
              <Link href="/areas/citrus-heights" className="hover:text-primary transition duration-300">
                Citrus Heights
              </Link>
              <Link href="/areas/granite-bay" className="hover:text-primary transition duration-300">
                Granite Bay
              </Link>
              <Link href="/areas/auburn" className="hover:text-primary transition duration-300">
                Auburn
              </Link>
              <Link href="/areas/grass-valley" className="hover:text-primary transition duration-300">
                Grass Valley
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary/20 mt-8 pt-8 text-center"> {/* Updated border color */}
          <p className="text-sm text-text-primary/60">© {currentYear} CarpetCozy. All rights reserved.</p> {/* Adjusted copyright color */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 