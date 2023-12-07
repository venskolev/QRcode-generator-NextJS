import React, { createContext, useState, useContext, useEffect, Suspense, useCallback } from 'react';
import { useRouter } from 'next/router';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Cookies from 'js-cookie';
import Loader from '../components/Loading/Loader';

const LanguageContext = createContext();
const LANG_COOKIE_KEY = 'preferredLanguage';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const changeLanguage = useCallback((newLanguage) => {
    Cookies.set(LANG_COOKIE_KEY, newLanguage, { expires: 365 });
    setLanguage(newLanguage);

    i18n.changeLanguage(newLanguage).then(() => {
      setLoading(false);
    });

    router.push(`/${newLanguage}`);
  }, [router]);

  useEffect(() => {
    const preferredLanguage = Cookies.get(LANG_COOKIE_KEY) || 'en';
    if (language !== preferredLanguage) {
      changeLanguage(preferredLanguage);
    }
  }, [language, changeLanguage]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Извлечете новия език от URL и актуализирайте language state
      const newLanguage = url.split('/')[1];
      setLanguage(newLanguage);
    };

    // Слушайте промените на пътя
    router.events.on('routeChangeComplete', handleRouteChange);

    // Почистете слушателя при размонтиране на компонента
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    loading ? <Loader /> :
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
