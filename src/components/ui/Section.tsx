import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray' | 'blue' | 'dark';
  id?: string;
  textColor?: 'default' | 'light' | 'dark';
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  bgColor = 'white',
  id,
  textColor = 'default',
}) => {
  // Background color classes
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-100',
    dark: 'bg-blue-900',
  };
  
  // Text color classes for the main content
  const textClasses = {
    default: '',
    light: 'text-white',
    dark: 'text-gray-900',
  };
  
  // Title color classes based on background
  const titleColorClass = 
    textColor === 'light' ? 'text-white' : 
    textColor === 'dark' ? 'text-gray-900' : 
    bgColor === 'dark' ? 'text-white' : 
    bgColor === 'gray' ? 'text-gray-900' : 
    bgColor === 'blue' ? 'text-blue-900' : 'text-gray-900';
  
  // Subtitle color classes based on background
  const subtitleColorClass = 
    textColor === 'light' ? 'text-blue-100' : 
    textColor === 'dark' ? 'text-gray-700' : 
    bgColor === 'dark' ? 'text-blue-100' : 
    bgColor === 'gray' ? 'text-gray-700' : 
    bgColor === 'blue' ? 'text-blue-700' : 'text-gray-600';
  
  return (
    <section id={id} className={`py-16 ${bgClasses[bgColor]} ${textClasses[textColor]} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColorClass}`}>{title}</h2>}
            {subtitle && <p className={`text-lg ${subtitleColorClass} max-w-3xl mx-auto`}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section; 