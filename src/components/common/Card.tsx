import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-200">
      <Icon className="w-12 h-12 text-emerald-500 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}