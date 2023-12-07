import React from 'react';
import { useRouter } from 'next/router';
import './styles.css';
import { Trans, useTranslation } from 'react-i18next';


const Footer = () => {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  const router = useRouter();
  const { t } = useTranslation();

  const handleLinkToLibdev = () => {
    window.open('https://libdev.net', '_blank');
  };

  return (
    <>
    <footer>
      
        <p>&copy; {currentYear} <Trans i18nKey="QR Code Generator"></Trans>.&nbsp;
          <Trans i18nKey="All rights reserved"></Trans>.&nbsp;
          <strong onClick={handleLinkToLibdev}>libdev.net</strong>
     </p>
    </footer > 
    </>
  );
};

export default Footer;
