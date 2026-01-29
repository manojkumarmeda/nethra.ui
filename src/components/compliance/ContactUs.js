import React from 'react';
import { config } from '../../config/config';

const ContactUs = () => {
  return (
    <div className='bg-white w-full max-w-4xl flex flex-col'>
      <div className='flex-1 overflow-y-auto p-6'>
        <div className='max-w-none prose prose-gray'>
          <div className='mb-5'>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed text-left'>
              If you have any questions, concerns, or feedback, please feel free
              to reach out to us. We are here to assist you and ensure that your
              experience with <strong>Nethra App</strong> is a positive one.
            </p>
          </div>
          <section className='mb-5'>
            <h2 className='text-base font-bold text-gray-900 mb-4 text-left'>
              Contact Information
            </h2>
            <div className='space-y-4 text-gray-700'>
              <div>
                <h3 className='font-semibold text-teal-800'>Email</h3>
                <p className='text-sm text-gray-700 leading-relaxed text-left'>
                  For general inquiries, support, or feedback, please email us
                  at:{' '}
                  <a
                    href={`mailto:${config.company.email}`}
                    className='text-teal-600 hover:underline'
                  >
                    {config.company.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
