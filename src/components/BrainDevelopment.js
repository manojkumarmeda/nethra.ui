import React from 'react';

const BrainDevelopment = () => {
    const stages = [
        {
            title: "Sensorimotor",
            ageRange: "(Birth to 2 Years)",
            image: "/assets/newborn-baby-crib.png",
            description: "During this stage, your child's cognitive development is just beginning to form. Babies learn through their five senses and trial-and-error learning.",
            keyPoints: [
                "Learning through senses and exploration",
                "Develops object permanence",
                "Learns cause-effect actions (e.g., banging cup = spill)",
                "Basic motor skills (sucking, grasping, etc.)"
            ]
        },
        {
            title: "Preoperational Stage",
            ageRange: "(2 - 7 Years)",
            image: "/assets/cute-baby-girl-home.png",
            description: "A time of growing imagination and language. Children use words and symbols to express ideas, engage in pretend play, and begin early reasoning—though still from their own perspective.",
            keyPoints: [
                "Rapid language development",
                "Symbolic thinking and pretend play",
                "Egocentric perspective",
                "Uses images and words to represent objects"
            ]
        },
        {
            title: "Concrete Operational Stage",
            ageRange: "(7 - 11 Years)",
            image: "/assets/potrait-smiling-girl.png",
            description: "Children develop logical thinking, understand cause and effect, and can organize, classify, and solve problems using concrete information.",
            keyPoints: [
                "Improved problem-solving and categorization",
                "Better understanding of numbers and space",
                "Can read maps, understand dimensions and time"
            ]
        },
        {
            title: "Formal Operational Stage",
            ageRange: "(11+ Years)",
            image: "/assets/potrait-smiling-boy.png",
            description: "Children begin to think abstractly, reason logically, and solve complex problems. They can imagine possibilities, test hypotheses, and plan for the future.",
            keyPoints: [
                "Abstract and hypothetical thinking",
                "Systematic reasoning",
                "Capable of imagining future scenarios"
            ]
        }
    ];

    return (
        <section className="section bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-teal-600 section-title text-center">Stages of Brain Development</h2>
                <p className="section-subtitle text-center">
                    Understanding the potential negative effects of excessive smartphone and tablet usage on children's development and well-being.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
                    {stages.map((stage, index) => (
                        <StageCard key={index} stage={stage} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// StageCard component with responsive and mobile-friendly styles
const StageCard = ({ stage }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className={`card text-left cursor-pointer relative pt-0 bg-white text-gray-900 rounded-xl shadow-md transition-all duration-300`}
            style={{
                background: isHovered ? '#0d9488' : '#fff',
                color: isHovered ? '#fff' : '#111827'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Responsive image positioning */}
            <div className="absolute -top-8 transform -translate-x-1/2 sm:-translate-x-0 z-10">
                <div className="w-20 h-24 rounded-xl overflow-hidden shadow-lg mx-auto sm:mx-0">
                    <img
                        src={stage.image}
                        alt={stage.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="px-4 sm:px-6 pb-6 pt-16 sm:pt-3">
                <h3
                    className={`text-lg sm:text-xl font-bold mb-1 text-left sm:pl-20 ${isHovered ? 'text-white' : 'text-teal-500'} hover:text-white transition-colors duration-300`}
                >
                    {stage.title}
                </h3>
                <p
                    className={`text-xs sm:text-sm font-medium text-left sm:pl-20 ${isHovered ? 'text-white' : 'text-teal-500'} hover:text-white transition-colors duration-300`}
                >
                    {stage.ageRange}
                </p>
                <div className="mt-4">
                    {!isHovered ? (
                        <p className="text-gray-600 leading-relaxed text-xs sm:text-sm text-left transition-colors duration-300">
                            {stage.description}
                        </p>
                    ) : (
                        <div className="text-white transition-colors duration-300">
                            <p className="text-xs sm:text-sm font-medium">Key Characteristics :</p>
                            <ul className="space-y-0 pl-2">
                                {stage.keyPoints.map((point, index) => (
                                    <li key={index} className="text-xs sm:text-sm flex items-start">
                                        <span className="text-teal-200 mr-2">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrainDevelopment;
