
import i18n from '@/i18n/i18nInit';
import enTranslations from './en.json';
import viTranslations from './vi.json';

// Register translations
const registerTranslations = () => {
    // English
    i18n.addResourceBundle('en', 'dashboard', enTranslations, true, true);
    // Vietnamese
    i18n.addResourceBundle('vi', 'dashboard', viTranslations, true, true);
};

// Register translations immediately
registerTranslations();

export default registerTranslations;