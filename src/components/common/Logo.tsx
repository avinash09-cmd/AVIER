import React from 'react';
import { Shield } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Shield className="w-8 h-8 text-emerald-500" />
      <div className="ml-2">
        <span className="text-xl font-bold text-white">AVIER</span>
        <span className="text-xs text-gray-400 block -mt-1">by Avinash</span>
      </div>
    </div>
  );
}