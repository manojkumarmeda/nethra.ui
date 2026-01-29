import { useState, useEffect } from 'react';

const CriticalWindow = () => {
  const images = ['/assets/eye.png', '/assets/eye-to-face.png'];

  const [currentImage, setCurrentImage] = useState(0);
  //show alternatively of following images from public/assets ( eye.png, eye-to-face.png) with transision
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 700); // match transition duration
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='section bg-gradient-to-br from-teal-700 to-teal-600 text-white relative overflow-hidden'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
          <div className='flex justify-center items-center'>
            <div className='relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96'>
              <img
                src={images[0]}
                alt='Base'
                className={`
                                    absolute top-0 left-0 w-full h-full object-contain
                                    transition-opacity duration-700 ease-in-out
                                    ${
                                      currentImage === 0 && fade
                                        ? 'opacity-100 z-10'
                                        : 'opacity-0 z-0'
                                    }
                                `}
                style={{ transition: 'opacity 0.7s' }}
              />
              <img
                src={images[1]}
                alt='Overlay'
                className={`
                                    absolute top-0 left-0 w-full h-full object-contain
                                    transition-opacity duration-700 ease-in-out
                                    ${
                                      currentImage === 1 && fade
                                        ? 'opacity-100 z-10'
                                        : 'opacity-0 z-0'
                                    }
                                `}
                style={{ transition: 'opacity 0.7s' }}
              />
            </div>
          </div>
          <div className='text-center lg:text-left space-y-4'>
            <h2 className='section-title text-white'>
              Critical Development Window
            </h2>
            <p className='text-base sm:text-lg leading-relaxed opacity-90'>
              The first two stages (birth to 7 years) are the most critical for
              cognitive development. By age 7, your child's brain reaches 90% of
              its development, with only 10% occurring from age 7 to adulthood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriticalWindow;
