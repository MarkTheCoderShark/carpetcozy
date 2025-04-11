import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  variant?: 'light' | 'dark';
  authorImage?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  location,
  rating,
  variant = 'light',
  authorImage,
}) => {
  // Use theme colors for the default 'light' variant
  const bgColor = variant === 'dark' ? 'bg-text-primary' : 'bg-background'; // Dark variant uses dark brown bg
  const textColor = variant === 'dark' ? 'text-background/90' : 'text-text-primary/80'; // Muted text
  const borderColor = variant === 'dark' ? 'border-primary/30' : 'border-gray-100'; // Subtle border
  const nameColor = variant === 'dark' ? 'text-background' : 'text-text-primary'; // Main text color for name
  const locationColor = variant === 'dark' ? 'text-background/70' : 'text-text-primary/60'; // More muted location

  // Generate placeholder initials if no author image is provided
  const initials = author
    .split(' ')
    .map((name) => name[0])
    .join('')
    .toUpperCase();

  return (
    <div className={`p-6 ${bgColor} border ${borderColor} rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}> {/* Use rounded-xl, adjusted hover shadow */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className={`${textColor} mb-6 italic text-lg`}>"{quote}"</p> {/* Slightly larger quote text */}
      <div className="flex items-center">
        {authorImage ? (
          <div className="w-12 h-12 mr-4 relative overflow-hidden rounded-full">
            <Image
              src={authorImage}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className={`w-12 h-12 mr-4 rounded-full ${variant === 'dark' ? 'bg-primary/80' : 'bg-primary'} flex items-center justify-center ${variant === 'dark' ? 'text-text-primary' : 'text-background'} font-bold`}> {/* Use theme primary color for avatar bg */}
            {initials}
          </div>
        )}
        <div>
          <p className={`font-semibold ${nameColor}`}>{author}</p>
          <p className={`text-sm ${locationColor}`}>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 