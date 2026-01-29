import React from 'react';
import { config, getSocialLinks } from '../config/config';

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <footer className='bg-teal-900 text-white border-t border-teal-800'>
      <div className='max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-6'>
        {/* Left Section */}
        <div className='flex flex-col items-start w-full md:w-auto'>
          <h3 className='text-xl font-bold text-white'>
            {config.company.name} app
          </h3>
          <p className='text-gray-200 text-sm mt-1'>
            Grab attention, set the tone, convey the mission.
          </p>
          <p className='text-gray-300 text-xs mt-3'>
            Copyright &copy; 2025 {config.company.name}. All Rights Reserved.
          </p>
          <p className='text-xs text-teal-300 mt-1'>
            Powered by{' '}
            <a
              href='https://staticval.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-white'
            >
              Staticval
            </a>
          </p>
        </div>
        {/* Right Section */}
        <div className='flex flex-col items-start md:items-end w-full md:w-auto gap-2'>
          <div className='flex items-center gap-2 flex-wrap'>
            <span className='text-gray-200 text-sm mr-2'>Follow Us On:</span>
            <a
              href={getSocialLinks().facebook}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              className='rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white'
            >
              <img
                src='/assets/icons/fb.png'
                alt='Facebook'
                className='w-6 h-6'
              />
            </a>
            <a
              href={getSocialLinks().instagram}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white'
            >
              <img
                src='/assets/icons/insta.png'
                alt='Instagram'
                className='w-6 h-6'
              />
            </a>
            <a
              href={getSocialLinks().twitter}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='X'
              className='rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white'
            >
              <img src='/assets/icons/x.png' alt='X' className='w-6 h-6' />
            </a>
            <a
              href={getSocialLinks().linkedin}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white'
            >
              <img
                src='/assets/icons/LinkedIn.png'
                alt='LinkedIn'
                className='w-6 h-6'
              />
            </a>
          </div>
          <div className='flex flex-wrap gap-1 text-xs text-teal-200 mt-2'>
            <button
              onClick={() => window.open('/privacy-policy', '_blank')}
              className='cursor-pointer hover:underline bg-transparent border-none text-xs text-teal-200 hover:text-white p-0'
            >
              Privacy
            </button>
            <span>|</span>
            <button
              onClick={() => window.open('/terms-of-service', '_blank')}
              className='cursor-pointer hover:underline bg-transparent border-none text-xs text-teal-200 hover:text-white p-0'
            >
              Terms
            </button>
            <span>|</span>
            <button
              onClick={() => window.open('/refund-policy', '_blank')}
              className='cursor-pointer hover:underline bg-transparent border-none text-xs text-teal-200 hover:text-white p-0'
            >
              Refund Policy
            </button>
            <span>|</span>
            <button
              onClick={() => window.open('/about-us', '_blank')}
              className='cursor-pointer hover:underline bg-transparent border-none text-xs text-teal-200 hover:text-white p-0'
            >
              About Us
            </button>
            <span>|</span>
            <button
              onClick={() => window.open('/data-deletion-policy', '_blank')}
              className='cursor-pointer hover:underline bg-transparent border-none text-xs text-teal-200 hover:text-white p-0'
            >
              Data Deletion Policy
            </button>
            <span>|</span>
            <button
              onClick={() => window.open('/contact', '_blank')}
              className='cursor-pointer hover:underline bg-transparent border-none text-xs text-teal-200 hover:text-white p-0'
            >
              Contact
            </button>
          </div>
        </div>
        {/* Contact Modal */}
        {isContactOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
            <div className='bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative'>
              <button
                onClick={closeContact}
                className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
                aria-label='Close'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
              <h2 className='text-2xl font-bold text-teal-900 mb-4'>
                Contact Us
              </h2>
              <div className='space-y-4 text-gray-700'>
                <div>
                  <h3 className='font-semibold text-teal-800'>Email</h3>
                  <a
                    href={`mailto:${config.company.email}`}
                    className='text-teal-600 hover:underline'
                  >
                    {config.company.email}
                  </a>
                </div>
                {/* <div>
                  <h3 className="font-semibold text-teal-800">Phone</h3>
                  <a
                    href={`tel:${config.company.phone.replace(/\D/g, "")}`}
                    className="text-teal-600 hover:underline"
                  >
                    {config.company.phone}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-800">Address</h3>
                  <p className="text-sm">
                    {config.address.street}
                    <br />
                    {config.address.city}, {config.address.state}{" "}
                    {config.address.zip}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-800">
                    Business Hours
                  </h3>
                  <p className="text-sm">
                    Weekdays: {config.businessHours.weekday}
                    <br />
                    Weekends: {config.businessHours.weekend}
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
