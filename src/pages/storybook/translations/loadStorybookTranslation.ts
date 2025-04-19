import i18n from '@/i18n/i18nInit';
import enTranslations from './en.json';
import viTranslations from './vi.json';

// Define the namespace for storybook
const NAMESPACE = 'storybook';

// Register translations
const registerStorybookTranslations = () => {
    // Check if translations are already registered
    if (!i18n.hasResourceBundle('en', NAMESPACE)) {
        // English
        i18n.addResourceBundle('en', NAMESPACE, enTranslations, true, true);
        // Vietnamese
        i18n.addResourceBundle('vi', NAMESPACE, viTranslations, true, true);
        console.log(`Storybook translations loaded for namespace: ${NAMESPACE}`);
    }
};

// Register translations immediately
registerStorybookTranslations();

export { NAMESPACE };
export default registerStorybookTranslations; 