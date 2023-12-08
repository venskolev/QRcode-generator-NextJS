import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CookieContainer from "../../containers/CookieContainer";

const CookiesComponent = ({ children }) => {
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Проверка за наличие на бисквитки
    const hasConsented = Cookies.get("cookieConsent");

    if (!hasConsented && !consentGiven) {
      // Активира модалния прозорец
      setCookieModalOpen(true);
    }
  }, [consentGiven]);

  // const handleCookieModalClose = () => {
  //   setCookieModalOpen(false);
  //   // Не записвайте бисквитката тук; чакайте да видите потребителския избор
  // };

  const handleCookieModalClose = () => {
    setCookieModalOpen(false);
  };

  const giveConsent = () => {
    setConsentGiven(true);
    const setResult = Cookies.set("cookieConsent", "true", { expires: 365 });
    console.log("Set result:", setResult);
    setCookieModalOpen(false); // Затваря модалния прозорец, след като е дадено съгласие
  };

  const declineConsent = () => {
    setConsentGiven(false); // Не сте дали съгласие
    setCookieModalOpen(false); // Затваря модалния прозорец
  };

  return (
    <>
      {children}
      <CookieContainer
        open={cookieModalOpen}
        onAccept={giveConsent}
        onDecline={declineConsent}
        onClose={handleCookieModalClose}
      />
    </>
  );
};

export default CookiesComponent;
