import React from 'react';
import PrivacyPolicy from '../components/compliance/PrivacyPolicy';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PrivacyPolicyPage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <div className='container mx-auto py-8 px-4 top-16 mb-12 relative'>
        <h1 className='text-3xl font-bold text-center text-gray-900 mb-6'>
          Privacy Policy
        </h1>
        <div className='flex justify-center'>
          <PrivacyPolicy />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
