import React from 'react';

const DigitalImpact = () => {
  const impacts = [
    {
      icon: "/assets/icons/eye-icon.png",
      title: "Eye-Sight Issues",
      description: "Digital eye strain, vision impairment, and blue light exposure affecting retinal health.",
      risk: "high risk"
    },
    {
      icon: "/assets/icons/chart-icon.png",
      title: "Distraction",
      description: "Reduced academic performance due to constant access to entertainment and social media.",
      risk: "high risk"
    },
    {
      icon: "/assets/icons/hand-love-icon.png",
      title: "Health Concerns",
      description: "Radiation exposure, sleep disorders, and potential chronic health issues.",
      risk: "medium risk"
    },
    {
      icon: "/assets/icons/human-brain.png",
      title: "Cyberbullying",
      description: "Exposure to online harassment, body shaming, and mental health impacts.",
      risk: "high risk"
    },
    {
      icon: "/assets/icons/search-icon.png",
      title: "False Information",
      description: "Access to unreliable sources leading to misinformation and wrong learning.",
      risk: "medium risk"
    },
    {
      icon: "/assets/icons/academic-icon.png",
      title: "Academic Misconduct",
      description: "Increased plagiarism and reduced critical thinking development.",
      risk: "medium risk"
    },
    {
      icon: "/assets/icons/social-icon.png",
      title: "Social Isolation",
      description: "Increased plagiarism and reduced critical thinking development.",
      risk: "high risk"
    },
    {
      icon: "/assets/icons/sleep-icon.png",
      title: "Sleep Disruption",
      description: "Blue light and screen time affecting natural sleep patterns.",
      risk: "high risk"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title text-center text-teal-500">Digital Device Impact on Children</h2>
        <p className="section-subtitle text-center">
          Understanding the potential negative effects of excessive smartphone and tablet usage on children's development and well-being.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <div key={index} className="card text-center p-6 border bg-[#E9FAF9] hover:bg-white hover:border-teal-500 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl md:text-3xl mb-4 block">
                <img src={impact.icon} alt={impact.title} className="inline-block" />
              </div>
              <h3 className="text-base font-semibold text-[#24C9C6] mb-3 justify-self-start">{impact.title}</h3>
              <p className="text-xs text-[#1B9795] leading-relaxed text-left bg-[#BBEEED] w-fit p-1 pl-2 pr-2 rounded-full mb-3">{impact.risk}</p>
              <p className="text-sm text-[#595959] leading-relaxed text-left">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalImpact;
