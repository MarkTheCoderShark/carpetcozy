import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  // Updated bgColor options to reflect new theme
  bgColor?: 'default' | 'alt' | 'primary-light' | 'dark'; 
  id?: string;
  // textColor prop might be less necessary now, but keep for explicit overrides
  textColor?: 'default' | 'light'; 
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  bgColor = 'default', // Default to standard background
  id,
  textColor = 'default', // Default to standard text color
}) => {
  // Background color classes using new theme colors
  const bgClasses = {
    default: 'bg-background', // White
    alt: 'bg-primary/10', // Use light primary tint instead of off-white
    'primary-light': 'bg-primary/10', // Very light primary blue tint
    dark: 'bg-text-primary', // Dark brown/charcoal
  };
  
  // Text color classes - Primarily for dark background override
  const textClasses = {
    default: 'text-text-primary', // Default dark brown text
    light: 'text-background', // White text for dark background
  };
  
  // Determine text color based on bgColor and explicit textColor prop
  const effectiveTextColor = textColor === 'light' || bgColor === 'dark' ? textClasses.light : textClasses.default;
  const effectiveSubtitleColor = textColor === 'light' || bgColor === 'dark' ? 'text-background/80' : 'text-text-primary/80'; // Slightly muted subtitle

  return (
    // Increased vertical padding
    <section id={id} className={`py-16 ${bgClasses[bgColor]} ${effectiveTextColor} ${className}`}> 
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center"> {/* Increased margin */}
            {/* Title uses the main effective text color */}
            {title && <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${effectiveTextColor}`}>{title}</h2>}
            {/* Subtitle uses a slightly muted version */}
            {subtitle && <p className={`text-lg ${effectiveSubtitleColor} max-w-3xl mx-auto`}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;