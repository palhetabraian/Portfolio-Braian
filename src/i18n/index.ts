import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { enUS } from '@/i18n/locales/en-US';
import { ptBR } from '@/i18n/locales/pt-BR';

const languageStorageKey = 'portfolio-language';
const defaultLanguage = 'pt-BR';
const availableLanguages = ['pt-BR', 'en-US'];

function getInitialLanguage() {
  const storedLanguage = localStorage.getItem(languageStorageKey);

  if (storedLanguage && availableLanguages.includes(storedLanguage)) {
    return storedLanguage;
  }

  return defaultLanguage;
}

i18n.use(initReactI18next).init({
  resources: {
    'pt-BR': {
      translation: ptBR,
    },
    'en-US': {
      translation: enUS,
    },
  },
  lng: getInitialLanguage(),
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (language) => {
  localStorage.setItem(languageStorageKey, language);
  document.documentElement.lang = language;
});

document.documentElement.lang = i18n.language;

export { i18n };
