import '../components/Footer/styles.css';
import '../styles/main.css';
import { LanguageProvider } from '../context/LanguageContext.js';
import { I18nextProvider } from 'react-i18next';
import Head from 'next/head';
import { i18n } from '../locales/i18n.js'; 
import { ThemeProvider } from '../context/ThemeContext';
import CookiesComponent  from '../components/Cookies/CookiesComponent';

function MyApp({ Component, pageProps }) {
  return (
    <CookiesComponent>
    <ThemeProvider>
      <Head>
      </Head>
      <LanguageProvider>
        <I18nextProvider i18n={i18n}>
          <Component className="styleToggle" {...pageProps} />
        </I18nextProvider>
      </LanguageProvider>
      </ThemeProvider>
    </CookiesComponent>
  );
}

export default MyApp;
