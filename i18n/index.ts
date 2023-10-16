import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';

const resources = {
	en: {
		translation: en,
	},
} as const;

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
	},
	fallbackLng: 'en',
	keySeparator: '.',
	interpolation: {
		escapeValue: false,
	},
	compatibilityJSON: 'v3',
});
export default i18n;
