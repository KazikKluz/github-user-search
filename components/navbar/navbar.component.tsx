import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Moon from '../../public/SVG/icon-moon.svg';
import Sun from '../../public/SVG/icon-sun.svg';

import styles from './navbar.module.scss';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const handleMode = () => {
    resolvedTheme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>devfinder</div>
      <button className={styles.modeswitch} onClick={handleMode}>
        {resolvedTheme === 'light' ? 'DARK' : 'LIGHT'}
        <div className={styles.icon}>
          {resolvedTheme === 'light' ? <Moon /> : <Sun />}
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
