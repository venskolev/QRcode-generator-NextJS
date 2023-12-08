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

const getUserLanguage = () => {
  if (typeof window !== 'undefined') {
    const languageCode = (window.navigator.languages && window.navigator.languages[0]) ||
                          window.navigator.language ||
                          window.navigator.userLanguage ||
                          'en';

    // Преобразуване на всички символи към малки букви и вземане на основния код на езика
    const mainLanguageCode = languageCode.toLowerCase().split('-')[0];

    console.log(languageCode);

    if (mainLanguageCode) {
      console.log(mainLanguageCode);
      return mainLanguageCode;
    }
  }

  return 'en';
};

const setPreferredLanguage = (language) => {
  // Записване на предпочитанията за език в бисквитка
  Cookies.set(LANG_COOKIE_KEY, language, { expires: 365, path: '/' });
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getUserLanguage(),
    interpolation: {
      escapeValue: false,
    },
  });

const LanguageProvider = ({ children }) => {
  const userLanguage = getUserLanguage();

  useEffect(() => {
    if (!Cookies.get(LANG_COOKIE_KEY)) {
      setPreferredLanguage(userLanguage);
    }
  }, [userLanguage]);

  useEffect(() => {
    i18n.changeLanguage(Cookies.get(LANG_COOKIE_KEY) || userLanguage);
  }, [userLanguage]);

  return <>{children}</>;
};

export { i18n, LanguageProvider };
