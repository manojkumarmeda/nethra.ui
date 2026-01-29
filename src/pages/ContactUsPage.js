import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactUs from '../components/compliance/ContactUs';

const ContactUsPage = () => {
  return (
    <div className='min-h-screen bg-gray-50 pt-6'>
      <Header />
      <div className='container mx-auto py-1 px-4 top-16 mb-12 relative'>
        <h1 className='text-3xl font-bold text-center text-gray-900 mb-6'>
          Contact Us
        </h1>
        <div className='flex justify-center'>
          <ContactUs />
        </div>
      </div>
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsPage;
