import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../constants/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formspreeEndpoint = 'https://formspree.io/f/mrbzkrev';  

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="bg-transparent" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-4xl font-semibold uppercase font-playfair tracking-wide text-amber-900">
              {t.franchise}
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-brown-900 dark:text-brown-50 text-3xl sm:text-5xl">
              {t.contactUs}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-brown-600 dark:text-brown-400">
              {t.contactDesc}
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-amber-900 text-white">
                    {/* Address icon */}
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-brown-900 dark:text-white">{t.address}</h3>
                    <p className="text-brown-600 dark:text-brown-400">CasaBlanca, HayMohammedi</p>
                    <p className="text-brown-600 dark:text-brown-400">Maroc</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-amber-900 text-white">
                    {/* Contact icon */}
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-brown-900 dark:text-white">{t.contact}</h3>
                    <p className="text-brown-600 dark:text-brown-400">Mobile: +21255555555</p>
                    <p className="text-brown-600 dark:text-brown-400">Email: info@khatra.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-amber-900 text-white">
                    {/* Opening hours icon */}
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-brown-900 dark:text-white">{t.openingHours}</h3>
                    <p className="text-brown-600 dark:text-brown-400">{t.weekdays}</p>
                    <p className="text-brown-600 dark:text-brown-400">{t.weekends}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">{t.readyToStart}</h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">{t.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="given-name"
                      placeholder={t.namePlaceholder}
                      className={`mb-2 w-full rounded-md border border-brown-400 py-2 pl-2 pr-4 shadow-md dark:text-brown-300 sm:mb-0 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">{t.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder={t.emailPlaceholder}
                      className={`mb-2 w-full rounded-md border border-brown-400 py-2 pl-2 pr-4 shadow-md dark:text-brown-300 sm:mb-0 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider">{t.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      cols="30"
                      rows="5"
                      placeholder={t.messagePlaceholder}
                      className={`mb-2 w-full rounded-md border border-brown-400 py-2 pl-2 pr-4 shadow-md dark:text-brown-300 sm:mb-0 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn bg-amber-900 text-white hover:bg-gray-700 font-xl">
                    {t.sendMessage}
                  </button>
                </div>
              </form>
              {showSuccessMessage && (
                <p className="mt-4 text-green-500">{t.successMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
