import React from 'react';
import { useTheme } from '../../context/ThemeContext.js';
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

function ToggleModeButton() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <div className="nav_ac" onClick={toggleTheme}>
      <WiMoonAltWaningCrescent4 />
      </div>
    </>
  );
}

export default ToggleModeButton;
