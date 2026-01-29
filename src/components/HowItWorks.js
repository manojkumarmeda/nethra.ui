import React from 'react';

const steps = [
  {
    img: '/assets/icons/computer-phone-sync.png',
    alt: 'Child Device',
    text: 'Install Nethra on Child’s Device',
  },
  {
    img: '/assets/icons/smart-phone-01.png',
    alt: 'Parent Dashboard',
    text: 'Connect to Parent Dashboard',
  },
  {
    img: '/assets/icons/dashboard-browsing.png',
    alt: 'Monitor & Protect',
    text: 'Monitor, Act & Protect in Real-Time',
  },
];

const HowItWorks = () => (
  <section className="section bg-white">
    <div className="container">
      <h2 className="section-title text-center text-[#24C9C6]">How It Works</h2>
      <p className="section-subtitle text-center text-[#595959]">
        Set up Nethra in minutes — install the app, connect your child’s device, and start monitoring and managing their digital world with ease.
      </p>
      <div className="mb-8">
        <p className="text-2xl text-[#24C9C6]">Use a 3-step layout:</p>
      </div>
      <div className="p-6 flex flex-col md:flex-row items-center bg-white gap-6 md:gap-0">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center flex-1 min-w-[180px]">
              <div className="bg-[#E6FAFA] rounded-full w-28 h-28 flex items-center justify-center mb-4">
                <img src={step.img} alt={step.alt} className="w-12 h-12" />
              </div>
              <p className="text-center font-semibold text-[#24C9C6] text-lg leading-tight">
                {step.text}
              </p>
            </div>
            {idx < steps.length - 1 && (
              // Dotted line: horizontal on desktop, vertical on mobile
              <div className="flex-1 flex items-center justify-center md:mb-11">
                <div
                  className="
                    hidden md:block
                    border-t-4 border-dotted border-[#24C9C6] w-full mx-4
                  "
                ></div>
                <div
                  className="
                    md:hidden
                    border-l-4 border-dotted border-[#24C9C6] h-12 mx-0
                  "
                ></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
