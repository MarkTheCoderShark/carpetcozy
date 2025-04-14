import React, { useState } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image: string;
  href: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  image,
  href,
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    console.error(`Failed to load image: ${image}`);
    setImageError(true);
  };

  return (
    <Link href={href} className={`block group ${className}`}>
      <div className="bg-background rounded-xl overflow-hidden border border-primary/20 shadow-md transition-all duration-300 group-hover:shadow-lg h-full flex flex-col"> {/* Use rounded-xl, shadow-md, slightly enhance hover shadow */}
        <div className="relative h-48 overflow-hidden">
          {imageError ? (
            <div className="flex items-center justify-center w-full h-full bg-gray-200">
              <span className="text-gray-500">{title}</span>
            </div>
          ) : (
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              onError={handleImageError}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 flex-grow">
          <div className="flex items-center mb-3">
            {icon && <div className="mr-3 text-primary">{icon}</div>} {/* Updated icon color */}
            <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">{title}</h3> {/* Updated colors */}
          </div>
          <p className="text-text-primary/80">{description}</p> {/* Updated description color */}
        </div>
        <div className="px-6 pb-6 mt-auto">
          <div className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform duration-300"> {/* Updated color */}
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard; 