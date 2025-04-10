import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
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
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1 h-full border border-gray-100 card-hover">
        {image && (
          <div className="relative h-56 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center mb-3">
            {icon && <div className="mr-3 text-blue-600">{icon}</div>}
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
          </div>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-800">
            <span>Learn more</span>
            <svg className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard; 