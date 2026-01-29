import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='App'>
      <div className='min-h-screen bg-white text-gray-900 flex items-center'>
        <div className='w-full max-w-6xl mx-auto px-6 py-16'>
          <Header />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-5'>
            <div className='flex flex-col items-center md:items-start text-center md:text-left space-y-6'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 backdrop-blur'>
                <span className='h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_12px_rgba(13,148,136,0.6)]'></span>
                <p className='text-xs text-teal-700'>Digital wellness</p>
              </div>

              <h1 className='text-4xl md:text-5xl font-semibold leading-tight text-teal-600'>
                Guide their screen time with confidence
              </h1>
              <p className='text-gray-700 max-w-xl'>
                An effort to save children from eye sight issues, screen
                addiction, and developmental challenges. Protect their vision,
                mental health, and cognitive growth with mindful digital
                parenting.
              </p>

              <Link
                to='/nethra'
                aria-label='Go to Nethra page'
                className='relative w-full max-w-md aspect-[4/3] group'
              >
                <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-100/60 via-cyan-100/40 to-teal-50/30 blur-2xl transition-opacity duration-300 group-hover:opacity-90'></div>
                <div className='relative h-full rounded-3xl border border-teal-200 bg-teal-50/80 backdrop-blur flex items-center justify-center shadow-xl shadow-teal-200/50 transition-transform duration-300 group-hover:-translate-y-1'>
                  <img
                    src='/assets/eye.png'
                    alt='Alert eye watching over usage'
                    className='w-64 h-64 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]'
                  />
                </div>
              </Link>
            </div>
            <div className='flex flex-col items-center md:items-start text-center md:text-left space-y-4'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 backdrop-blur'>
                <span className='h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_12px_rgba(13,148,136,0.6)]'></span>
                <p className='text-xs text-teal-700'>Secure & Private</p>
              </div>
              <h1 className='text-4xl md:text-5xl font-semibold leading-tight text-teal-600'>
                Your child's brain, protected
              </h1>
              <p className='text-gray-700 max-w-xl'>
                We prioritize your child's privacy and data security. Nethra
                operates with end-to-end encryption, ensuring that all personal
                information and usage data remain confidential and protected
                from unauthorized access.
              </p>
              <Link
                to='/thrinethra'
                aria-label='Go to ThriNethra page'
                className='relative w-full max-w-md aspect-[4/3] group'
              >
                <div className='absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-100/60 via-cyan-100/40 to-teal-50/30 blur-2xl transition-opacity duration-300 group-hover:opacity-90'></div>
                <div className='relative h-full rounded-3xl border border-teal-200 bg-teal-50/80 backdrop-blur flex items-center justify-center shadow-xl shadow-teal-200/50 transition-transform duration-300 group-hover:-translate-y-1'>
                  <img
                    src='/assets/eye-to-face.png'
                    alt='Protected brain'
                    className='w-64 h-64 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]'
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
