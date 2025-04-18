import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18next instance
i18n
  // Load translations using http backend
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Init i18next
  .init({
    // Default language
    fallbackLng: 'en',
    // Debug mode
    debug: process.env.NODE_ENV === 'development',

    // Init with default namespace
    ns: ['common', 'pageTitle', 'messages'],
    defaultNS: ['common', 'pageTitle', 'messages'],

    // Backend configuration
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // Language detection configuration
    detection: {
      // Order of lookup
      order: ['localStorage', 'navigator'],
      // Cache language in localStorage
      caches: ['localStorage'],
      // localStorage key
      lookupLocalStorage: 'i18nextLng',
    },
    
    // Interpolation configuration
    interpolation: {
      // Not needed for React as it escapes by default
      escapeValue: false,
    },
  });

export default i18n; 