import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  return (
    <Link href={href} className={`block group ${className}`}>
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 group-hover:shadow-lg h-full flex flex-col"> {/* Updated shadow, added border */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 flex-grow">
          <div className="flex items-center mb-3">
            {icon && <div className="mr-3 text-blue-600">{icon}</div>}
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3> {/* Updated title color, removed mb-3 as heading global style adds margin */}
          </div>
          <p className="text-gray-700">{description}</p> {/* Updated description color */}
        </div>
        <div className="px-6 pb-6 mt-auto">
          <div className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-300"> {/* Changed to font-semibold */}
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