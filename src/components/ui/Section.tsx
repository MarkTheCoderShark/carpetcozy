import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  // Use 'default' (white) or 'alt' (soft gray/blue) for standard sections
  bgColor?: 'default' | 'alt' | 'dark' | 'faq'; // Added 'faq' option
  id?: string;
  icon?: React.ReactNode; // Optional icon to display next to the title
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
  icon, // Destructure icon prop
  textColor = 'default', // Default to standard text color
}) => {
  // Background color classes using new theme colors
  const bgClasses: { [key: string]: string } = { // Added index signature for type safety
    default: 'bg-background',       // White
    alt: 'bg-background-alt',     // Soft gray/blue #f9fafb
    dark: 'bg-text-primary',      // Dark brown/charcoal for contrast sections
    faq: 'bg-faq-bg',             // Light brand blue #e2f3fc for FAQ
  };
  
  // Text color classes - Primarily for dark background override
  const textClasses = {
    default: 'text-text-primary', // Default dark brown text
    light: 'text-background', // White text for dark background
  };
  
  // Determine text color based on bgColor and explicit textColor prop
  // FAQ uses default text color unless explicitly overridden to light
  const effectiveTextColor = textColor === 'light' || (bgColor === 'dark' && textColor !== 'default') ? textClasses.light : textClasses.default;
  const effectiveSubtitleColor = textColor === 'light' || (bgColor === 'dark' && textColor !== 'default') ? 'text-background/80' : 'text-text-primary/80'; // Slightly muted subtitle

  return (
    // Increased vertical padding and added top border for separation
    <section id={id} className={`py-20 border-t border-gray-100 ${bgClasses[bgColor]} ${effectiveTextColor} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
        {(title || subtitle) && (
          <div className="mb-12 text-center"> {/* Increased margin */}
            {/* Title with optional icon */}
            {title && (
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${effectiveTextColor} flex items-center justify-center gap-x-3`}>
                {icon && <span className="text-primary">{icon}</span>} {/* Display icon */}
                <span>{title}</span>
              </h2>
            )}
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