import React from 'react';
import AboutUs from '../components/compliance/AboutUs';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutUsPage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <div className='container mx-auto py-8 px-4 top-16 mb-12 relative'>
        <h1 className='text-3xl font-bold text-center text-gray-900 mb-6'>
          About Us
        </h1>
        <div className='flex justify-center'>
          <AboutUs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
