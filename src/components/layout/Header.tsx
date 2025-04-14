"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button'; // Assuming Button component is correctly imported and styled

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check scroll position on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items data
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/areas', label: 'Service Areas' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

  // Define header classes for default and scrolled states
  const headerBaseClasses = "absolute top-0 left-0 w-full z-50 transition-all duration-300"; // Changed to absolute positioning
  const headerDefaultBg = "bg-transparent"; // Transparent initially
  // Use a slightly transparent background with blur and shadow when scrolled
  const headerScrolledBg = "bg-white/90 backdrop-blur-md shadow-md"; // Scrolled state with blur and shadow

  return (
    <header className={`${headerBaseClasses} ${scrolled ? headerScrolledBg : headerDefaultBg}`}>
      {/* Increased header height using h-24 (96px) */}
      <div className="container mx-auto px-4 h-24 flex items-center justify-between"> 
        
        {/* Logo - Wrapped in Link, using Next.js Image */}
        <Link href="/" className="flex items-center flex-shrink-0"> {/* Reverted space-x-2 */}
          <Image
            src="/logo.png" // Updated to match renamed file
            alt="CarpetCozy Logo"
            width={280}
            height={78}
            priority // Add priority prop back
            unoptimized // Add unoptimized prop
            // Removed inline style, relying on width/height props
          />
          {/* Removed decorative icon */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              // Enhanced hover effect with border-bottom and background
              className={`
                text-base font-medium px-3 py-2 rounded-md transition-all duration-200
                ${pathname === item.href 
                  ? 'text-primary font-semibold border-b-2 border-primary' 
                  : 'text-text-primary hover:text-primary hover:bg-primary/5 hover:border-b-2 hover:border-primary/60'}
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Hide CTA on small screens */}
          <div className="hidden md:block">
             <Button href="/contact" size="sm" variant="primary">Get a Free Quote</Button>  {/* Ensure primary variant */}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-primary focus:outline-none p-2" // Updated text color
            onClick={toggleMenu}
            aria-label="Toggle menu" // Accessibility improvement
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                // Close icon (X)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Appears below header when open */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-lg border-t border-primary/20"> {/* Updated bg and border */}
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                // Enhanced hover effect for mobile links
                className={`
                  block py-3 px-4 text-center font-medium rounded-md transition-all duration-200
                  ${pathname === item.href 
                    ? 'text-primary font-semibold bg-primary/10 border-l-4 border-primary' 
                    : 'text-text-primary hover:text-primary hover:bg-primary/5 hover:border-l-4 hover:border-primary/60'}
                `}
                onClick={() => setIsMenuOpen(false)} // Close menu on navigation
              >
                {item.label}
              </Link>
            ))}
            {/* Separator and CTA for mobile */}
            <div className="mt-3 pt-3 border-t border-gray-100">
               <Button href="/contact" variant="primary" className="w-full justify-center" onClick={() => setIsMenuOpen(false)}>Get a Free Quote</Button> {/* Ensure primary variant */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;