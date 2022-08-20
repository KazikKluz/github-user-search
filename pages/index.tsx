import type { NextPage } from 'next';

import { useState } from 'react';
import { Octokit } from 'octokit';
import Navbar from '../components/navbar/navbar.component';
import Searchbox from '../components/searchbox/searchbox.component';
import Mainbox from '../components/mainbox/mainbox.component';

const octokit = new Octokit({
  auth: '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',
});

const Home: NextPage = () => {
  const [isLightMode, setMode] = useState(true);
  const [isUser, setIsUser] = useState(true);

  const handleMode = () => {
    setMode((prevState) => !prevState);
  };

  const fetchData = async (user: string) => {
    await octokit
      .request(`GET /users/${user}`, {
        username: 'kazikkluz',
      })
      .then((result) => console.log(result.data))
      .catch((err) => {
        if (err.response.status == 404) {
          setIsUser(false);
        }
      });
  };
  return (
    <>
      <Navbar mode={isLightMode} handleClick={handleMode} />
      <Searchbox fetchData={fetchData} isUser={isUser} />
      <Mainbox />
    </>
  );
};

export default Home;
