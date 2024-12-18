import React from 'react';
import Logo from './common/Logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <nav className="bg-black/30 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="flex space-x-4">
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Features</a>
              <a href="#security" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Security</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}