import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import styles from './AboutBackground.module.css';

const AboutBackground = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${styles.background} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
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
