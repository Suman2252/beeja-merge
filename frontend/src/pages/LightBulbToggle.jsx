import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './css style/lightbulb.css';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';

const LightBulbToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-btn ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <RiMoonFill className="theme-icon" />
      ) : (
        <RiSunFill className="theme-icon" />
      )}
      <div className="ripple-background"></div>
    </button>
  );
};

export default LightBulbToggle;
