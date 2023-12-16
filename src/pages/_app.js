import React, { useEffect, useState } from 'react';

// import '../components/Footer/styles.css';
import '../styles/main.css';
import { LanguageProvider } from '../context/LanguageContext.js';
import { I18nextProvider } from 'react-i18next';
import Head from 'next/head';
import { i18n } from '../locales/i18n.js'; 
import { ThemeProvider } from '../context/ThemeContext';
import CookiesComponent from '../components/Cookies/CookiesComponent';
import Menu from '../components/Menu/Menu.js';
import Footer from '../components/Footer/Footer.js';

const FooterFixed = () => {
  const [footerFixed, setFooterFixed] = useState(false);

  useEffect(() => {
    const adjustFooter = () => {
      const body = document.body;
      const content = document.getElementById('content');
  
      if (!content) {
        return;
      }
  
      const bodyHeight = body.clientHeight;
      const viewportHeight = window.visualViewport.height;
      const contentHeight = content.scrollHeight;
  
      if (contentHeight > viewportHeight) {
        setFooterFixed(true);
      } else {
        setFooterFixed(false);
      }
    };
  
    adjustFooter();
  }, []);

  return (
    <Footer fixed={footerFixed} />
  )
}

function MyApp({ Component, pageProps }) {

  
  return (
    <CookiesComponent>
    <ThemeProvider>
      <Head>
      </Head>
      <LanguageProvider>
          <I18nextProvider i18n={i18n}>
          <Menu />
            <Component id="content" className="styleToggle" {...pageProps} />
            <FooterFixed />
        </I18nextProvider>
      </LanguageProvider>
      </ThemeProvider>
    </CookiesComponent>
  );
}

export default MyApp;
