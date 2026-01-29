import React from 'react';
import DataDeletionPolicy from '../components/compliance/DataDeletionPolicy';
import Footer from '../components/Footer';
import Header from '../components/Header';

const DataDeletionAndRetentionPage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <div className='container mx-auto py-8 px-4 top-16 mb-12 relative'>
        <h1 className='text-3xl font-bold text-center text-gray-900 mb-6'>
          Data Deletion & Retention Policy
        </h1>
        <div className='flex justify-center'>
          <DataDeletionPolicy />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataDeletionAndRetentionPage;
