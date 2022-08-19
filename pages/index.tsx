import type { NextPage } from 'next';
import { useState } from 'react';

import Navbar from '../components/navbar/navbar.component';
import Searchbox from '../components/searchbox/searchbox.component';
import Mainbox from '../components/mainbox/mainbox.component';

const Home: NextPage = () => {
  const [isLightMode, setMode] = useState(true);

  const handleMode = () => {
    setMode((prevState) => !prevState);
  };
  return (
    <>
      <Navbar mode={isLightMode} handleClick={handleMode} />
      <Searchbox />
      <Mainbox />
    </>
  );
};

export default Home;
