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
  
  // Text color classes
  const textClasses = {
    default: '',
    light: 'text-white',
    dark: 'text-gray-900',
  };
  
  // Get subtitle text color based on background
  const subtitleColorClass = 
    textColor === 'light' ? 'text-blue-100' : 
    textColor === 'dark' ? 'text-gray-700' : 
    bgColor === 'dark' ? 'text-blue-100' : 'text-gray-600';
  
  return (
    <section id={id} className={`py-16 ${bgClasses[bgColor]} ${textClasses[textColor]} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-lg ${subtitleColorClass} max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section; 