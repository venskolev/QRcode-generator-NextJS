import React, { createContext, useState, useContext, useEffect, Suspense } from 'react';
import { useRouter } from 'next/router';
import i18n from 'i18next';
import Cookies from 'js-cookie';
import Loader from '../components/Loading/Loader';

const LanguageContext = createContext();
const LANG_COOKIE_KEY = 'preferredLanguage';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const changeLanguage = (newLanguage) => {
    // Записване на предпочитанията за език в бисквитка
    Cookies.set(LANG_COOKIE_KEY, newLanguage, { expires: 365 });
    // console.log('Cookie set:', Cookies.get(LANG_COOKIE_KEY));
    setLanguage(newLanguage);

    // Актуализация на езика в i18n
    i18n.changeLanguage(newLanguage).then(() => {
      setLoading(false); 
    });
    // Променете пътя на текущия език
    router.push(`/${newLanguage}`);
  };

  useEffect(() => {
    // Четене на предпочитания за език от бисквитка
    const preferredLanguage = Cookies.get(LANG_COOKIE_KEY);
  
    // Ако предпочитаният език от бисквитка не е наличен, вземете езика от браузъра
    const browserLanguage = window.navigator.language.split('-')[0];
    const defaultLanguage = browserLanguage || 'en';
  
    const languageToUse = preferredLanguage || defaultLanguage;
  
    changeLanguage(languageToUse);
  }, []);  
  

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
