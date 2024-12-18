import React from 'react';
import Button from '../common/Button';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="text-center">
      <h2 className="text-2xl font-bold text-white mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-400">
        Contact us for enterprise solutions and custom implementations.
      </p>
      <a href="mailto:contact@avier.com">
        <Button icon={Mail} className="mt-4">
          Contact Us
        </Button>
      </a>
    </div>
  );
}