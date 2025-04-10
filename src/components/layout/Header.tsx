"use client";

import Link from 'next/link';
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
          className="flex items-center flex-shrink-0 text-blue-600"
        >
          {/* SVG Logo */}
          <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.5 10.2c-1.4 0-2.6.5-3.5 1.4-.9.9-1.4 2.1-1.4 3.5 0 1.4.5 2.6 1.4 3.5.9.9 2.1 1.4 3.5 1.4 1.4 0 2.6-.5 3.5-1.4.9-.9 1.4-2.1 1.4-3.5 0-1.4-.5-2.6-1.4-3.5-.9-.9-2.1-1.4-3.5-1.4zm0 8.2c-.9 0-1.7-.3-2.3-.9-.6-.6-.9-1.4-.9-2.3 0-.9.3-1.7.9-2.3.6-.6 1.4-.9 2.3-.9.9 0 1.7.3 2.3.9.6.6.9 1.4.9 2.3 0 .9-.3 1.7-.9 2.3-.6.6-1.4.9-2.3.9z" fill="currentColor"/>
            <path d="M65.6 13.7l-3 5.9h-1.8l-2.9-5.9v6.1h-1.8V10h2.5l3.2 6.3L65 10h2.5v9.8h-1.8v-6.1z" fill="currentColor"/>
            <path d="M73.8 16.9h-1.5v2.9h-1.8V10h4c.8 0 1.5.1 2.1.4.6.3 1 .7 1.4 1.2.3.5.5 1.1.5 1.8 0 .7-.2 1.3-.5 1.8-.4.5-.9.9-1.5 1.2l2.4 3.5h-2.1l-2-2.9zm-.1-1.6h2.2c.6 0 1-.2 1.3-.5.3-.3.5-.7.5-1.3 0-.5-.2-1-.5-1.3-.3-.3-.8-.5-1.3-.5h-2.2v3.6z" fill="currentColor"/>
            <path d="M83.4 18.2h4.9v1.6h-6.7V10h6.5v1.6h-4.7v2.4h4.2v1.6h-4.2v2.6z" fill="currentColor"/>
            <path d="M95.5 11.6v8.2h-1.8v-8.2h-2.7V10h7.2v1.6h-2.7z" fill="currentColor"/>
            <path d="M111.5 19.8h-1.8l-4.6-6.5v6.5h-1.8V10h1.8l4.6 6.5V10h1.8v9.8z" fill="currentColor"/>
            <path d="M120.3 15.8h-3.8v4h-1.8V10h6.5v1.6h-4.7v2.6h3.8v1.6z" fill="currentColor"/>
            <path d="M132 10h1.8v9.8H132l-5-6.6v6.6h-1.8V10h1.8l5 6.6V10z" fill="currentColor"/>
            <path d="M140.2 16.9h-1.5v2.9h-1.8V10h4c.8 0 1.5.1 2.1.4.6.3 1 .7 1.4 1.2.3.5.5 1.1.5 1.8 0 .7-.2 1.3-.5 1.8-.4.5-.9.9-1.5 1.2l2.4 3.5h-2.1l-2-2.9zm-.1-1.6h2.2c.6 0 1-.2 1.3-.5.3-.3.5-.7.5-1.3 0-.5-.2-1-.5-1.3-.3-.3-.8-.5-1.3-.5h-2.2v3.6z" fill="currentColor"/>
            <path d="M151.1 10c.8 0 1.5.1 2.1.4.6.3 1.1.7 1.4 1.2.3.5.5 1.1.5 1.8 0 .7-.2 1.3-.5 1.8-.3.5-.8.9-1.4 1.2-.6.3-1.3.4-2.1.4h-1.9v3h-1.8V10h3.7zm-.1 5.2c.6 0 1.1-.2 1.4-.5.3-.3.5-.8.5-1.3 0-.6-.2-1-.5-1.3-.3-.3-.8-.5-1.4-.5h-1.8v3.6h1.8z" fill="currentColor"/>
            <path d="M36.1 19.9c-1.8 0-3.4-.4-4.9-1.3-1.5-.9-2.6-2.1-3.5-3.6-.8-1.5-1.2-3.3-1.2-5.1 0-1.9.4-3.6 1.2-5.1.8-1.5 2-2.7 3.5-3.6 1.5-.9 3.1-1.3 4.9-1.3 1.8 0 3.4.4 4.9 1.3 1.5.9 2.6 2.1 3.5 3.6.8 1.5 1.2 3.3 1.2 5.1 0 1.9-.4 3.6-1.2 5.1-.8 1.5-2 2.7-3.5 3.6-1.5.9-3.1 1.3-4.9 1.3zm0-2c1.4 0 2.7-.3 3.8-1 1.1-.7 2-1.6 2.7-2.8.6-1.2 1-2.6 1-4.1 0-1.5-.3-2.9-1-4.1-.6-1.2-1.5-2.1-2.7-2.8-1.1-.7-2.4-1-3.8-1-1.4 0-2.7.3-3.8 1-1.1.7-2 1.6-2.7 2.8-.6 1.2-1 2.6-1 4.1 0 1.5.3 2.9 1 4.1.6 1.2 1.5 2.1 2.7 2.8 1.1.7 2.4 1 3.8 1z" fill="currentColor"/>
            <path d="M32.4 17.2c-1.3-.8-2.3-1.9-3-3.2-.7-1.3-1-2.7-1-4.1 0-1.4.3-2.8 1-4.1.7-1.3 1.7-2.4 3-3.2 1.3-.8 2.7-1.2 4.2-1.2 1.5 0 2.9.4 4.2 1.2 1.3.8 2.3 1.9 3 3.2.7 1.3 1 2.7 1 4.1 0 1.4-.3 2.8-1 4.1-.7 1.3-1.7 2.4-3 3.2-1.3.8-2.7 1.2-4.2 1.2-1.5 0-2.9-.4-4.2-1.2zm7.4-.9c1-.6 1.8-1.5 2.4-2.5.6-1.1.8-2.3.8-3.6 0-1.3-.3-2.5-.8-3.6-.6-1.1-1.3-1.9-2.4-2.5-1-.6-2.1-.9-3.2-.9-1.2 0-2.3.3-3.2.9-1 .6-1.8 1.5-2.4 2.5-.6 1.1-.8 2.3-.8 3.6 0 1.3.3 2.5.8 3.6.6 1.1 1.3 1.9 2.4 2.5 1 .6 2.1.9 3.2.9 1.2 0 2.3-.3 3.2-.9z" fill="currentColor"/>
            <path d="M30 10c0-1 .4-1.9 1.1-2.5.7-.6 1.5-1 2.5-1h4.9c1 0 1.9.3 2.5 1 .7.6 1.1 1.5 1.1 2.5v0c0 1-.4 1.9-1.1 2.5-.7.6-1.5 1-2.5 1h-4.9c-1 0-1.9-.3-2.5-1-.7-.6-1.1-1.5-1.1-2.5v0zm4 7.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="currentColor"/>
            <path d="M24.5 9.3c0 1.2-.2 2.3-.7 3.4-.5 1.1-1.1 2-1.9 2.8-.8.8-1.8 1.5-3 1.9-1.2.5-2.4.7-3.7.7h-7V.5h7c1.3 0 2.6.2 3.7.7 1.1.5 2.1 1.1 3 2 .8.8 1.5 1.8 1.9 2.8.5 1 .7 2.2.7 3.3zm-3.6 0c0-.8-.1-1.5-.4-2.2-.3-.7-.7-1.3-1.2-1.8-.5-.5-1.1-.9-1.8-1.2-.7-.3-1.4-.4-2.3-.4H12v11.3h3.2c.8 0 1.6-.1 2.3-.4.7-.3 1.3-.7 1.8-1.2.5-.5.9-1.1 1.2-1.8.3-.7.4-1.5.4-2.3z" fill="currentColor"/>
          </svg>
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