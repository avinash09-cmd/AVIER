import React from 'react';
import { Lock, Key, Database } from 'lucide-react';
import Card from '../common/Card';

const features = [
  {
    icon: Lock,
    title: 'Homomorphic Encryption',
    description: 'Process your data while it remains encrypted, ensuring complete privacy and security.',
  },
  {
    icon: Key,
    title: 'Secure Key Management',
    description: 'Advanced key management system ensuring your encryption keys are always protected.',
  },
  {
    icon: Database,
    title: 'Encrypted Storage',
    description: 'Your data is stored in encrypted form, protected from unauthorized access.',
  },
];

export default function Features() {
  return (
    <div id="features" className="grid md:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <Card key={index} {...feature} />
      ))}
    </div>
  );
}