import React from 'react';

const WhyTrust = () => {
  const trustPoints = [
    {
      icon: "/assets/icons/screen-add-to-home.png",
      title: "Evidence-Based Research",
      description: "All recommendations are backed by peer-reviewed neuroscience research and clinical studies from leading institutions."
    },
    {
      icon: "/assets/icons/safe.png",
      title: "Expert Pediatric Team",
      description: "Our platform is developed in collaboration with pediatric neurologists, child development specialists, and early childhood experts."
    },
    {
      icon: "/assets/icons/health.png",
      title: "Privacy & Security First",
      description: "Your child's data is protected with enterprise-grade security and we never share personal information with third parties."
    }
  ];

  return (
    <section className="section py-8 px-2 sm:py-10 sm:px-4 md:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center text-[#24C9C6] text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
          Why Parents Trust Nethra
        </h2>
        <p className="section-subtitle text-center text-[#595959] mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
          Trusted by thousands of parents worldwide for reliable, science-based guidance in early childhood development.
        </p>
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="lg:col-span-2 flex justify-center items-center mb-6 sm:mb-8 lg:mb-0">
            <div className="relative">
              <img
                src="/assets/trust-shield.svg"
                alt="Shield Icon"
                className="w-20 h-20 sm:w-32 sm:h-32 md:w-64 md:h-64 object-contain"
              />
            </div>
          </div>
          <div className="lg:col-span-3 w-full">
            <div className="flex flex-col gap-4 sm:gap-6">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[#E9FAF9] rounded-lg shadow-sm transition-all duration-300 hover:translate-y-1 hover:shadow-lg w-full"
                >
                  <div className="bg-[#BBEEED] p-1.5 sm:p-2 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <img
                      src={point.icon}
                      alt={point.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-0.5 sm:mb-1">{point.title}</h3>
                    <p className="text-[#595959] leading-relaxed text-left text-xs sm:text-sm md:text-base">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;
