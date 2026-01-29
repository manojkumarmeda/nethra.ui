import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    icon: '/assets/Face.png',
    video: '/assets/GettyImages-1356060110.mp4',
    title: 'From Wonder to Wisdom',
    subtitle: 'Help your child grow with science-backed insights from Nethra.',
  },
  {
    icon: '/assets/Light.png',
    video: '/assets/6745349_Animation_Chemical_Equations_3840x2160.mp4',
    title: 'Smarter Parenting Starts Here',
    subtitle:
      "Equip yourself with the tools to guide, protect, and empower your child's development.",
  },
  {
    icon: '/assets/Brain.png',
    video: '/assets/6321095_Brain_Digital_Brain_1920x1080.mp4',
    title: 'Every Brain Begins with Curiosity',
    subtitle: 'Discover the powerful journey from senses to abstract thinking.',
  },
];

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  dotsClass: 'slick-dots slick-dots-bottom slick-dots-custom',
  customPaging: (i) => (
    <button
      type='button'
      aria-label={`Go to slide ${i + 1}`}
      className='w-3 h-3 rounded-full bg-white/60 hover:bg-white transition-all duration-300 border-none outline-none'
    />
  ),
};

const Hero = () => (
  <>
    <section className='relative min-h-[80vh] md:min-h-screen overflow-hidden'>
      <Header />
      <div className='relative h-full bg-gradient-to-b from-teal-600 to-teal-500'>
        <Slider {...sliderSettings}>
          {slides.map((slide, idx) => (
            <Slide key={idx} {...slide} />
          ))}
        </Slider>
      </div>
    </section>
    <TornPaperEffect />
  </>
);

const Header = () => (
  <div className='absolute top-0 left-0 right-0 z-20 p-4 sm:p-6'>
    <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center max-w-6xl mx-auto bg-white/95 backdrop-blur rounded-lg shadow-lg px-5 py-4 sm:px-7 sm:py-5'>
      <Link
        to='/'
        className='text-teal-600 text-lg sm:text-xl font-bold hover:text-teal-700 transition-colors cursor-pointer'
      >
        Nethra App
      </Link>
      <button className='w-full sm:w-auto bg-teal-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-700 transition-colors'>
        Get a demo
      </button>
    </div>
  </div>
);

const Slide = ({ icon, video, title, subtitle }) => (
  <div className='relative min-h-[80vh] md:h-screen'>
    <video
      className='absolute inset-0 w-full h-full object-cover'
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={video} type='video/mp4' />
    </video>
    <div className='absolute inset-0 bg-teal-600 opacity-70'></div>
    <div className='absolute inset-0 bg-teal-600 opacity-70 mix-blend-multiply'></div>
    <div className='relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4'>
      <div className='mb-8'>
        <img
          src={icon}
          alt='Slide Icon'
          className='w-20 h-20 mx-auto mb-6 filter invert brightness-0'
        />
      </div>
      <NethraLogo />
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-3xl tracking-widest'>
        {title}
      </h2>
      <p className='text-base sm:text-lg md:text-xl font-normal opacity-90 max-w-2xl leading-relaxed'>
        {subtitle}
      </p>
    </div>
  </div>
);

const NethraLogo = () => (
  <div className='flex justify-center gap-4 mb-4'>
    {'NETHRA'.split('').map((char, i) => (
      <span
        key={i}
        className='text-white text-lg md:text-2xl font-bold tracking-widest'
        style={{
          WebkitTextStroke: '1px white',
          color: 'transparent',
          letterSpacing: '0.2em',
          fontFamily: 'inherit',
          display: 'inline-block',
        }}
      >
        {char}
      </span>
    ))}
  </div>
);

const TornPaperEffect = () => (
  <div className='bg-white'>
    <div className='overflow-hidden relative'>
      <div className='absolute flex flex-col md:flex-row items-center justify-around sm:justify-center top-0 left-0 right-0 z-10 p-4 sm:p-6 h-full'>
        <div className='flex flex-col mb-6 md:mb-0 md:mr-8 max-w-full md:max-w-lg text-center md:text-left'>
          <p className='text-[#0d9488] font-bold text-2xl sm:text-4xl lg:text-[56px] leading-tight'>
            Bring Back the Paper Power!
          </p>
          <p className='text-base sm:text-lg lg:text-[24px] font-normal text-[#595959] mt-2'>
            Discover stories beyond screens — explore, learn, and grow one page
            at a time.
          </p>
        </div>
        <img
          src='/assets/news-paper.png'
          alt='Torn Paper Bottom'
          className='w-40 h-32 sm:w-60 sm:h-44 md:w-[350px] md:h-[280px] lg:w-[480px] lg:h-[360px] object-contain'
        />
      </div>
      <img
        src='/assets/torn-paper.png'
        alt='Torn Paper Top'
        className='w-full h-48 sm:h-[320px] md:h-[480px] lg:h-[600px] object-cover'
      />
    </div>
  </div>
);

export default Hero;
