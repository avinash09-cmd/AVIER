import React from 'react';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Security from './components/sections/Security';
import Contact from './components/sections/Contact';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <div className="mb-16">
          <FileUpload />
        </div>
        <Features />
        <Security />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;