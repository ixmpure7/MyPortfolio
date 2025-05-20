import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
}) => {
  const baseClasses = 'font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md hover:shadow-emerald-500/25 border border-emerald-600',
    secondary: 'bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-blue-500/25 border border-blue-600',
    outline: 'bg-transparent hover:bg-gray-800/10 text-current border border-gray-700 hover:border-current',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={allClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;