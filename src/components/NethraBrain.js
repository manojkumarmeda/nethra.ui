import React from 'react';

const NethraBrain = () => {
  return (
    <section className='section bg-gradient-to-br from-[#0D4645] to-[#24C9C6] text-white relative overflow-hidden'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
          <div className='text-center lg:text-left space-y-4'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-light text-white'>
              Nethra
            </h2>
            <p className='text-base sm:text-lg leading-relaxed opacity-90'>
              Advanced brain development analysis and personalized
              recommendations using cutting-edge neuroscience research. Our
              AI-powered platform provides real-time insights into your child's
              cognitive development, offering evidence-based guidance for
              optimal brain growth during critical developmental windows.
            </p>
          </div>

          <div className='flex justify-center items-center'>
            <div className='relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl shadow-xl shadow-black/30'>
              <video
                className='w-full h-full object-cover'
                src='/videos/0_Brain_Technology_2160x3840.mp4'
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NethraBrain;
