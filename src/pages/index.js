import React, { useState } from "react";
import { Trans } from "react-i18next";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import QrCodeGenerator from "../components/QrCode/QrCodeGenerator.js";
import MainCard from "@/components/Card/MainCard.js";

const Home = ({ lang }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <main id="content">
        <div className="styleToggle">
          <div>
            <Trans i18nKey="welcome" components={[<b key={0} />]}></Trans>
          </div>
        </div>
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label={<Trans i18nKey="url" />} value="1" />
                <Tab label={<Trans i18nKey="text" />} value="2" />
                <Tab label={<Trans i18nKey="vcard" />} value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <MainCard boxShadow title={<Trans i18nKey="QR Code Generator" />}>
                <QrCodeGenerator />
              </MainCard>
            </TabPanel>
            <TabPanel value="2">
              <MainCard boxShadow title={<Trans i18nKey="QR Code Generator" />}>
                <QrCodeGenerator />
              </MainCard>
            </TabPanel>
            <TabPanel value="3">
              <MainCard boxShadow title={<Trans i18nKey="QR Code Generator" />}>
                <QrCodeGenerator />
              </MainCard>
            </TabPanel>
          </TabContext>
        </Box>
      </main>
    </>
  );
};

export default Home;
