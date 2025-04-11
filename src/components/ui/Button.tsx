import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  
  // Variant classes
  const variantClasses = {
    primary: 'button-primary', // Use class from globals.css
    secondary: 'button-secondary', // Use class from globals.css
    outline: 'border border-gray-400 bg-transparent text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50', // Keep outline as Tailwind for now, can be moved to globals.css if needed
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
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
    return (
      <Link href={href} className={allClasses}>
        {content}
      </Link>
    );
  }
  
  return (
    <button
      type="button"
      className={allClasses}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button; 