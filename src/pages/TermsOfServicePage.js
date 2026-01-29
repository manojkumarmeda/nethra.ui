import React from 'react';
import TermsOfService from '../components/compliance/TermsOfService';
import Footer from '../components/Footer';
import Header from '../components/Header';

const TermsOfServicePage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <div className='container mx-auto py-8 px-4 top-16 mb-12 relative'>
        <h1 className='text-3xl font-bold text-center text-gray-900 mb-6'>
          Terms of Service
        </h1>
        <div className='flex justify-center'>
          <TermsOfService />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
