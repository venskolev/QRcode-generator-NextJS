import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';

import Menu from '../components/Menu/Menu.js';
import Footer from '../components/Footer/Footer.js';
import QrCodeGenerator from '../components/QrCode/QrCodeGenerator.js';

const Home = ({ lang }) => {
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

  // console.log(footerFixed);

  return (
    <>
      <Menu />
      <main id="content">
        <div className="styleToggle">
          <div>
            <Trans i18nKey="welcome" components={[<b key={0} />]}></Trans>
          </div>
        </div>
        <QrCodeGenerator />
      </main>
      <Footer fixed={footerFixed} />
    </>
  );
};

export default Home;
