import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  image?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  location,
  rating,
  image,
  className = '',
  variant = 'light',
}) => {
  const bgColorClass = variant === 'dark' ? 'bg-blue-800 text-white' : 'bg-white';
  const quoteColorClass = variant === 'dark' ? 'text-blue-100' : 'text-gray-700';
  const locationColorClass = variant === 'dark' ? 'text-blue-200' : 'text-gray-500';

  return (
    <div className={`${bgColorClass} rounded-lg shadow-md p-6 h-full border border-transparent ${variant === 'dark' ? 'border-blue-700' : 'border-gray-100'} card-hover ${className}`}>
      {/* Star Rating */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : variant === 'dark' ? 'text-blue-700' : 'text-gray-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <div className="relative">
        <svg className="absolute -top-2 -left-2 w-8 h-8 opacity-10 text-blue-500" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className={`${quoteColorClass} mb-4 italic pl-1`}>"{quote}"</p>
      </div>

      {/* Author Info */}
      <div className="flex items-center mt-6">
        {image && (
          <div className="mr-3">
            <Image
              src={image}
              alt={author}
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-100"
            />
          </div>
        )}
        <div>
          <p className="font-semibold">{author}</p>
          {location && <p className={`${locationColorClass} text-sm`}>{location}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 