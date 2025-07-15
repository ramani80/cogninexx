import React from 'react';
import { Eye, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const cards = [
    {
      icon: <Eye size={48} className="text-sky-400" />,
      title: "Vision",
      content: "To be the leading force in digital transformation, empowering businesses with innovative solutions that drive growth and success in the digital age."
    },
    {
      icon: <Award size={48} className="text-sky-400" />,
      title: "Why Choose Us",
      content: "Our team combines deep technical expertise with creative vision, delivering solutions that not only meet current needs but anticipate future challenges."
    },
    {
      icon: <Heart size={48} className="text-sky-400" />,
      title: "Commitment",
      content: "We are committed to excellence in every project, fostering long-term partnerships built on trust, innovation, and measurable results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            About <span className="text-sky-400">Cogninex Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-white mb-6 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to creating innovative solutions 
            that transform businesses and enhance user experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-sky-50 dark:bg-sky-900/30 rounded-full mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-black dark:text-white mb-2 sm:mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center text-sm sm:text-base">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;