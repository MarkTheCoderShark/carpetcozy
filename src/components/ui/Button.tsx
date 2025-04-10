import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-indigo-500 text-white hover:bg-indigo-600',
    outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Combine classes
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // Render as link or button
  if (href) {
    return (
      <Link href={href} className={allClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type="button"
      className={allClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 