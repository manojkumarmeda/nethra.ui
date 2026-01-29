import React, { useState } from 'react';

const SmartParenting = () => {
  const availableFeatures = [
    {
      icon: "/assets/icons/computer.png",
      title: "Screentime Management",
      description: "Set healthy limits and schedules for device usage to encourage balanced digital habits."
    },
    {
      icon: "/assets/icons/game-controller.png",
      title: "Internet Filter for Games & Apps",
      description: "Block inappropriate games and apps, ensuring safe and age-appropriate content."
    },
    {
      icon: "/assets/icons/lock-computer.png",
      title: "Block Pornography & Explicit Content",
      description: "Automatically block access to adult and explicit content across all devices."
    },
    {
      icon: "/assets/icons/database-sync.png",
      title: "Real-Time Data Sync",
      description: "Instantly sync monitoring data across devices for up-to-date insights."
    },
    {
      icon: "/assets/icons/location.png",
      title: "Real-Time Location Tracking",
      description: "Track your child’s location in real time for peace of mind and safety."
    },
    {
      icon: "/assets/icons/settings.png",
      title: "Social Media Monitoring & Control",
      description: "Monitor and manage your child’s social media activity and interactions."
    },
    {
      icon: "/assets/icons/mail-account.png",
      title: "Call & SMS Access",
      description: "View and manage call logs and SMS activity for enhanced safety."
    },
    {
      icon: "/assets/icons/transaction-history.png",
      title: "Browsing History Logs",
      description: "Review detailed logs of websites visited to ensure safe browsing."
    },
    {
      icon: "/assets/icons/alert.png",
      title: "Alerts, Reports & SOS",
      description: "Receive instant alerts, detailed reports, and emergency SOS notifications."
    },
    {
      icon: "/assets/icons/notification.png",
      title: "App Download Notifications",
      description: "Get notified whenever new apps are downloaded or installed."
    },
    {
      icon: "/assets/icons/geology-crust.png",
      title: "Geo-Fencing Zones",
      description: "Set up safe zones and receive alerts when boundaries are crossed."
    }
  ];
  const upcomingFeatures = [
    {
      icon: "/assets/icons/call-ringing.png",
      title: "SOS"
    },
    {
      icon: "/assets/icons/computer-video.png",
      title: "Realtime Screen View"
    },
    {
      icon: "/assets/icons/screen-adjust.png",
      title: "Screen Auto Adjustment"
    },
    {
      icon: "/assets/icons/call-blocked.png",
      title: "Spam & False Information Filtering"
    },
    {
      icon: "/assets/icons/computer-settings.png",
      title: "Screen Monitoring"
    },
    {
      icon: "/assets/icons/access.png",
      title: "Social Media Monitoring Access"
    }
  ];
  const [selected, setSelected] = useState('available');

  return (
    <section className="section bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#DEF7F6] uppercase tracking-widest text-2xl sm:text-3xl md:text-4xl leading-8 mb-4 text-center">
          Key Features Overview
        </h2>
        <h2 className="section-title text-center text-teal-500 text-xl sm:text-2xl md:text-3xl">
          Smart Parenting Starts with Smart Features
        </h2>
        <p className="section-subtitle text-center text-[#595959] text-base sm:text-lg mb-6">
          Explore powerful tools designed to protect, monitor, and guide your child’s digital habits.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-8 mb-8 justify-center">
          <button
            className={`text-lg sm:text-xl font-semibold border-b-2 pb-1 min-w-[140px] sm:min-w-[180px] md:min-w-[220px] transition-colors ${
              selected === 'available'
                ? 'text-teal-500 border-teal-300'
                : 'text-gray-700 border-transparent'
            }`}
            onClick={() => setSelected('available')}
          >
            Available Features
          </button>
          <button
            className={`text-lg sm:text-xl font-semibold border-b-2 pb-1 min-w-[140px] sm:min-w-[180px] md:min-w-[220px] transition-colors ${
              selected === 'upcoming'
                ? 'text-teal-500 border-teal-300'
                : 'text-gray-700 border-transparent'
            }`}
            onClick={() => setSelected('upcoming')}
          >
            Upcoming Features
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {selected === 'available' && (
            <div className="flex flex-col gap-5 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 flex-1 justify-center">
                {availableFeatures.slice(0, 10).map((feature, index) => (
                  <FeatureTile key={index} icon={feature.icon} title={feature.title} active={index % 2 === 0} />
                ))}
              </div>
              <div className="flex justify-center pl-0 sm:pl-5">
                <FeatureTile
                  icon={availableFeatures[10].icon}
                  title={availableFeatures[10].title}
                  active={true}
                />
              </div>
            </div>
          )}
          {selected === 'upcoming' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 flex-1 justify-center">
              {upcomingFeatures.map((feature, index) => (
                <FeatureTile key={index} icon={feature.icon} title={feature.title} active={index % 2 === 0} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SmartParenting;

/**
 * Common tile component for feature display, styled as in the screenshot.
 */
export const FeatureTile = ({ icon, title, active }) => (
  <div
    className={`flex flex-col items-center justify-center rounded-xl border transition-all duration-300
      ${active
        ? 'bg-[#E9FAF9] border-[#DEF7F6] shadow-md'
        : 'bg-white border-[#DEF7F6] hover:shadow-lg'}
      p-8 min-h-[170px] max-h-[170px] sm:w-full md:min-w-[220px] md:max-w-[220px] text-center`}
  >
    <div
      className={`flex items-center justify-center mb-6 rounded-lg
        ${active ? '' : 'bg-[#eafafa]'}
        w-14 h-14 text-3xl`}
    >
      <img src={icon} alt={title} className="w-full h-full object-contain" />
    </div>
    <div className="text-gray-700 text-lg font-medium text-center leading-tight">
      {title}
    </div>
  </div>
);
