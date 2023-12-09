import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Trans } from 'react-i18next';
import './styles.css';

const Footer = ({ fixed }) => {

  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  const handleLinkToLibdev = () => {
    window.open('https://libdev.net', '_blank');
  };

  return (
    <footer id="footer" className={!fixed ? 'fixedFooter' : 'relativeFooter'}>
      <p>
        &copy; {currentYear} <Trans i18nKey="QR Code Generator"></Trans>.&nbsp;
        <Trans i18nKey="All rights reserved"></Trans>.&nbsp;
        <strong onClick={handleLinkToLibdev}>libdev.net</strong>
      </p>
    </footer>
  );
};

export default Footer;
