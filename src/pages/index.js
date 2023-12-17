import React, { useState } from "react";
import { Trans } from "react-i18next";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
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
        <TabContext value={value}>
          <Grid
            display={"flex"}
            direction={"column"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            alignContent={"center"}
            sx={{ minWidth: "100vw" }}
          >
            <MainCard
              className="styleToggle"
              title={<Trans i18nKey="welcome" components={[<b key={0} />]} />}
            ></MainCard>
          </Grid>
          <Grid
            container
            xs={12} sm={6} md={12} lg={12} xl={12}
            // display={"flex"}
            // direction={"column"}
            justifyContent={"center"}
            // flexWrap={"wrap"}
            alignContent={"center"}
          >
            <Grid item marginTop={"50px"}>
              {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
              <MainCard boxShadow title={<Trans i18nKey="menu" />}>
                <TabList
                  orientation="vertical"
                  onChange={handleChange}
                  aria-label="QR generators"
                >
                  <Tab label={<Trans i18nKey="url" />} value="1" />
                  <Tab label={<Trans i18nKey="text" />} value="2" />
                  <Tab label={<Trans i18nKey="vcard" />} value="3" />
                </TabList></MainCard>
              {/* </Box> */}
            </Grid>
            <Grid item>
              <TabPanel value="1" sx={{ minWidth: "50vw" }}>
                <MainCard
                  boxShadow
                  title={<Trans i18nKey="QR Code Generator" />}
                >
                  <QrCodeGenerator />
                </MainCard>
              </TabPanel>
              <TabPanel value="2" sx={{ minWidth: "50vw" }}>
                <MainCard
                  boxShadow
                  title={<Trans i18nKey="QR Code Generator" />}
                >
                  <QrCodeGenerator />
                </MainCard>
              </TabPanel>
              <TabPanel value="3" sx={{ minWidth: "50vw" }}>
                <MainCard
                  boxShadow
                  title={<Trans i18nKey="QR Code Generator" />}
                >
                  <QrCodeGenerator />
                </MainCard>
              </TabPanel>
            </Grid>
          </Grid>
        </TabContext>
      </main>
    </>
  );
};

export default Home;
