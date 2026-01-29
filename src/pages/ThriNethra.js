import React from 'react';
import Hero from '../components/Hero';
import BrainDevelopment from '../components/BrainDevelopment';
import CriticalWindow from '../components/CriticalWindow';
import DigitalImpact from '../components/DigitalImpact';
import SmartParenting from '../components/SmartParenting';
import NethraBrain from '../components/NethraBrain';
import WhyTrust from '../components/WhyTrust';
import HowItWorks from '../components/HowItWorks';
import AppPreview from '../components/AppPreview';
import Footer from '../components/Footer';

const ThriNethra = () => {
  return (
    <div className='App text-center'>
      <Hero />
      <BrainDevelopment />
      <CriticalWindow />
      <DigitalImpact />
      <SmartParenting />
      <NethraBrain />
      <div style={{ position: 'relative' }}>
        <WhyTrust />
        <div
          className='blur-div'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backdropFilter: 'blur(8px)',
            pointerEvents: 'none',
            zIndex: 1,
            color: 'red',
            WebkitTextStroke: '1px white',
            fontSize: '2rem',
          }}
        />
        <HowItWorks />
      </div>
      <AppPreview />
      <Footer />
    </div>
  );
};

export default ThriNethra;
