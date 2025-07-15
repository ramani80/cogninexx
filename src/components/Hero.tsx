import React from 'react';
import ParticleBackground from './ParticleBackground';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 sm:pt-28">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
            "We don't just create solutions-
            <span className="text-sky-400">we create futures"</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8 tracking-wider">
            THINK. CODE. EVOLVE.
          </h2>
          
          <p className="text-lg sm:text-xl text-white mb-6 dark:text-white mb-6 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into innovative digital experiences through cutting-edge technology and creative excellence.
          </p>
          
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Discover Our Vision
            <ChevronDown size={20} />
          </button>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300"
        >
          <ChevronDown size={24} className="text-sky-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;