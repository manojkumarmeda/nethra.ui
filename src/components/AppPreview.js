import React from 'react';

const AppPreview = () => {
  return (
    <section className="section text-white bg-cover bg-center bg-no-repeat pb-0" style={{ backgroundImage: "url('/assets/bg-app-preview.png')" }}>
      <div 
        className="container"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AppPreviewText />
          <AppPreviewImage />
        </div>
      </div>
    </section>
  );
};

const AppPreviewText = () => (
  <div className="text-left md:text-center lg:text-left">
    <h2 className="text-4xl md:text-3xl font-bold mb-6 text-white">
      Easy Way to manage your Nethra account
    </h2>
    <p className="text-lg leading-relaxed opacity-90 mb-8">
      Easy to use mobile app that support on android and ios.
    </p>
    <div className="flex gap-4 md:justify-center lg:justify-start flex-wrap">
      <AppStoreButton />
      <GooglePlayButton />
    </div>
  </div>
);

const AppStoreButton = () => (
  <a
    href="#"
    className="bg-[#24C9C6] px-7 py-3.5 text-base font-semibold transition-all duration-300 inline-block hover:text-teal-500 backdrop-blur-sm rounded-xl"
  >
    <img src="/assets/app-store-icon.png" alt="App Store" className="inline-block h-8 mr-2" />
  </a>
);

const GooglePlayButton = () => (
  <a
    href="#"
    className="bg-[#24C9C6] px-7 py-3.5 text-base font-semibold transition-all duration-300 inline-block hover:text-teal-500 backdrop-blur-sm rounded-xl"
  >
    <img src="/assets/google-play-icon.png" alt="Google Play" className="inline-block h-8 mr-2" />
  </a>
);

const AppPreviewImage = () => (
  <div className="flex justify-center items-center gap-4 relative">
    <img src="/assets/app-preview.png" alt="App Preview" className="max-w-full h-auto" />
  </div>
);

export default AppPreview;
