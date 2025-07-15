import React, { useState } from 'react';
import { Code, Settings, TrendingUp, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <Code size={48} className="text-sky-400" />,
      title: "Web Development",
      shortDesc: "Modern, responsive websites",
      fullDesc: "We build modern, responsive, and scalable websites that enhance your digital presence and elevate your brand. Whether you're launching a startup or upgrading an enterprise site, we deliver performance-focused solutions tailored to your goals.."
    },
    {
      icon: <Settings size={48} className="text-sky-400" />,
      title: "Software Maintenance",
      shortDesc: "Reliable ongoing support",
      fullDesc: "Your software deserves consistent care. We provide proactive maintenance, updates, and troubleshooting to keep your systems running smoothly, securely, and without disruption."
    },
    {
      icon: <TrendingUp size={48} className="text-sky-400" />,
      title: "Digital Marketing",
      shortDesc: "Strategic online growth",
      fullDesc: "From social media campaigns to SEO and branding strategies, we help your business grow online. Our goal is simple: boost visibility, generate leads, and maximize your reach across digital platforms."
    },
    {
      icon: <Palette size={48} className="text-sky-400" />,
      title: "UI/UX Design",
      shortDesc: "Intuitive user experiences",
      fullDesc: "We craft intuitive, user-centric designs that ensure seamless interaction and lasting impressions. Our design process focuses on both beauty and usability to deliver meaningful digital experiences.."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Our <span className="text-sky-400">Services</span>
          </h2>
          <p className="text-xl text-white mb-6 dark:text-white mb-6 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions tailored to your business needs, 
            from concept to deployment and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp overflow-visible min-h-[320px] flex flex-col justify-start"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 dark:from-sky-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-sky-50 dark:bg-sky-900/30 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-black dark:text-white mb-4 text-center">
                  {service.title}
                </h3>
                
                <div className="text-center relative">
                  <p className={`text-gray-600 dark:text-gray-400 leading-relaxed transition-all duration-300 ${
                    hoveredCard === index ? 'opacity-0 h-0' : 'opacity-100'
                  }`}>
                    {service.shortDesc}
                  </p>
                  <p className={`text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-all duration-300 ${
                    hoveredCard === index ? 'opacity-100 mt-4 static' : 'opacity-0 absolute'
                  }`}>
                    {service.fullDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;