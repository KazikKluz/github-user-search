import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <nav>
      <div>devfinder</div>
      <button className='modeswitch' onClick={handleMode}>
        {theme === 'light' ? 'LIGHT' : 'DARK'}
      </button>
    </nav>
  );
};

export default Navbar;
