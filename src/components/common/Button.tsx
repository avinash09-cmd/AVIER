import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  className?: string;
}

export default function Button({
  children,
  onClick,
  disabled = false,
  type = 'button',
  variant = 'primary',
  icon: Icon,
  className = '',
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors';
  const variants = {
    primary: `${disabled ? 'bg-gray-600 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'} text-white`,
    secondary: `${disabled ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'} text-gray-200`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </button>
  );
}