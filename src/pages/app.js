import React, { useState, useEffect } from "react";
import { Trans, useTranslation } from 'react-i18next';

import Menu from "../components/Menu/Menu.js";
import Footer from "../components/Footer/Footer.js";
import QrCodeGenerator from "../components/QrCode/QrCodeGenerator.js"

export default function Home() {
  const { t } = useTranslation();

  const [footerPosition, setFooterPosition] = useState("relative");

  useEffect(() => {
    const adjustFooter = () => {
      const body = document.body;
      const main = document.querySelector("main");
      const footer = document.getElementById("footer");

      if (!main) {
        return;
      }
      const bodyHeight = body.clientHeight;
      const mainHeight = main.clientHeight;

      if (mainHeight < bodyHeight) {
        setFooterPosition("fixed");
      } else {
        setFooterPosition("relative");
      }
    };

    window.addEventListener("load", adjustFooter);
    window.addEventListener("resize", adjustFooter);
    adjustFooter();
    return () => {
      window.removeEventListener("load", adjustFooter);
      window.removeEventListener("resize", adjustFooter);
    };
  }, []);

  return (
    <>
      <Menu />
      <div>
      <h1>
      <Trans i18nKey="welcome">
        Добре дошли
      </Trans>
        </h1>
      </div>
      <QrCodeGenerator />
      <Footer style={{ position: footerPosition, bottom: 0 }} />
    </>
  );
}
