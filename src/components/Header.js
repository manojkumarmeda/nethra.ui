import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-white py-4 shadow-md fixed top-0 left-0 right-0 z-50'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <Link
            to='/'
            className='text-2xl md:text-xl font-bold text-teal-600 hover:text-teal-700 transition-colors duration-300 cursor-pointer'
          >
            Nethra App
          </Link>
          <Link
            to='/contact'
            className='w-full sm:w-auto bg-teal-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-700 transition-colors'
          >
            Get Demo
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
