import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

import enTranslation from './en/translation.json';
import deTranslation from './de/translation.json';
import bgTranslation from './bg/translation.json';

const LANG_COOKIE_KEY = 'preferredLanguage';

const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
  bg: {
    translation: bgTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    interpolation: {
      escapeValue: false,
    },
  });

// i18n.on('languageChanged', (language) => {
//   // Записване на предпочитанията за език в бисквитка
//   Cookies.set(LANG_COOKIE_KEY, language, { expires: 365, path: '/' });

//   console.log('Cookie set1:', Cookies.get(LANG_COOKIE_KEY));
// });

export { i18n };
