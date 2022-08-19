import type { NextPage } from 'next';

import Navbar from '../components/navbar/navbar.component';
import Searchbox from '../components/searchbox/searchbox.component';
import Mainbox from '../components/mainbox/mainbox.component';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Searchbox />
      <Mainbox />
    </>
  );
};

export default Home;
