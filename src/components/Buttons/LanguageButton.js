import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { useLanguage } from '../../context/LanguageContext.js';

const LanguageButton = () => {
  const { language, changeLanguage } = useLanguage();

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <Box>
      <Select className="MuiAppBar-root"
        value={language}
        onChange={handleChangeLanguage}
        input={<InputBase className="MuiAppBar-root" style={{ border: 'none', padding: '8px', fontSize: '14px', ml: "2px" }} />}
      >
        <MenuItem value="en">EN</MenuItem>
        <MenuItem value="de">DE</MenuItem>
        <MenuItem value="bg">BG</MenuItem>
      </Select>
    </Box>
  );
};

export default LanguageButton;
