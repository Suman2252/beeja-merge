import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import styles from './DarkThemeBackground.module.css';

const DarkThemeBackground = () => {
  const { isDarkMode } = useTheme();

  if (!isDarkMode) return null;

  return (
    <div className={styles.background}>
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

export default DarkThemeBackground;
