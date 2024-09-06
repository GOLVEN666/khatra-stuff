import React from 'react';
import { khatra_gear } from '../../public/images';
import { Button } from '.';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { translations } from '../constants/translations';

const Equipment = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="equipment-section" className="relative overflow-hidden py-16 px-4 bg-white">
      {/* SEO and Accessibility Improvement: Include descriptive aria-label */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none" aria-hidden="true">
        <span className="text-9xl font-bold text-gray-300 select-none">Équipement</span>
      </div>
      
      {/* Particle effect for visual enhancement */}
      <div className="particle-container absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
            aria-hidden="true"
          ></div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image with SEO optimization */}
          <div className="w-full lg:w-3/5 overflow-hidden rounded-lg shadow-lg">
            <img
              src={khatra_gear}
              alt="Khatra gear - Moroccan coffee equipment"
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Text content optimized for SEO */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center items-center text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4 font-playfair text-gray-800 hover:text-brown-600 transition-colors duration-300">
              {t.gearTitle}
            </h2>
            <p className="mb-6 text-gray-600 text-lg leading-relaxed">
              {t.gearDesc}
            </p>
            {/* Button linking to the contact page */}
            <Link to="/contact">
              <Button 
                label={t.gearButton}
                className="bg-brown-500 hover:bg-brown-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
              >
                {t.gearButton}
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
