"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${scrolled ? 'navbar' : 'bg-white'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center flex-shrink-0"
        >
          <Image 
            src="/carpetcozybartransparent.png" 
            alt="CarpetCozy Logo" 
            width={160} 
            height={40} 
            className="h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link href="/" className={`nav-item font-medium ${pathname === '/' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
            Home
          </Link>
          <Link href="/about" className={`nav-item font-medium ${pathname === '/about' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
            About Us
          </Link>
          <Link href="/services" className={`nav-item font-medium ${pathname === '/services' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
            Services
          </Link>
          <Link href="/areas" className={`nav-item font-medium ${pathname === '/areas' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
            Service Areas
          </Link>
          <Link href="/reviews" className={`nav-item font-medium ${pathname === '/reviews' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
            Reviews
          </Link>
          <Link href="/gallery" className={`nav-item font-medium ${pathname === '/gallery' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
            Gallery
          </Link>
          <Link href="/contact" className={`nav-item font-medium ${pathname === '/contact' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact" className="button-primary whitespace-nowrap">
            Get a Free Quote
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className={`nav-item font-medium ${pathname === '/' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-item font-medium ${pathname === '/about' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
              About Us
            </Link>
            <Link href="/services" className={`nav-item font-medium ${pathname === '/services' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
              Services
            </Link>
            <Link href="/areas" className={`nav-item font-medium ${pathname === '/areas' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
              Service Areas
            </Link>
            <Link href="/reviews" className={`nav-item font-medium ${pathname === '/reviews' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
              Reviews
            </Link>
            <Link href="/gallery" className={`nav-item font-medium ${pathname === '/gallery' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
              Gallery
            </Link>
            <Link href="/contact" className={`nav-item font-medium ${pathname === '/contact' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
              Contact
            </Link>
            <Link href="/contact" className="button-primary text-center w-full">
              Get a Free Quote
              <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 