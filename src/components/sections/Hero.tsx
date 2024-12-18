import React from 'react';

export default function Hero() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-white mb-4">
        Privacy-Preserving Cloud Storage with
        <span className="text-emerald-500 ml-2">AVIER</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Secure your data with state-of-the-art homomorphic encryption.
        Process your data while it remains encrypted, ensuring maximum privacy and security.
      </p>
    </div>
  );
}