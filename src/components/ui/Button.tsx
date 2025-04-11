import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Added event type
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset'; // Added button type prop
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  type = 'button', // Default type
}) => {
  // Base classes - Updated rounding and focus ring
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'; // Changed to font-bold

  // Variant classes - Using Tailwind utilities with new theme colors
  const variantClasses = {
    primary: 'bg-primary text-text-primary hover:bg-cta-hover', // Use new colors and specific hover background
    secondary: 'bg-background-alt text-text-primary border border-primary hover:bg-primary/20', // Off-white bg, light blue border
    outline: 'border border-primary bg-transparent text-primary hover:bg-primary/20', // Transparent bg, light blue text/border
  };

  // Size classes - Kept as is
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm', // Adjusted padding slightly
    md: 'px-5 py-2.5 text-base', // Adjusted padding slightly
    lg: 'px-7 py-3 text-lg', // Adjusted padding slightly
  };

  // Combine classes
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  // Render as link or button
  if (href) {
    // For links, ensure onClick doesn't interfere if passed
    const linkProps = onClick ? { onClick: (e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); onClick(e as any); } } : {};
    return (
      <Link href={href} className={allClasses} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type} // Use the type prop
      className={allClasses}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;