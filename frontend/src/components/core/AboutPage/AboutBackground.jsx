import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import styles from './AboutBackground.module.css';

const AboutBackground = () => {
  const { isDarkMode } = useTheme();

  return (
    <div 
      className={`${styles.background} ${isDarkMode ? styles.darkMode : styles.lightMode}`}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -999,
        pointerEvents: 'none'
      }}
    >
      <span className={styles.ball}></span>
      <span className={styles.ball}></span>
      <span className={styles.ball}></span>
      <span className={styles.ball}></span>
      <span className={styles.ball}></span>
      <span className={styles.ball}></span>
      <span className={styles.ball}></span>
    </div>
  );
};

export default AboutBackground;
