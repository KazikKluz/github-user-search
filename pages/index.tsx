import type { NextPage } from 'next';

import { useState } from 'react';
import { Octokit } from 'octokit';
import Navbar from '../components/navbar/navbar.component';
import Searchbox from '../components/searchbox/searchbox.component';
import Mainbox from '../components/mainbox/mainbox.component';
import { response } from 'msw';

const octokit = new Octokit({
  auth: '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',
});

export type User = {
  name: string;
  avatar_url: string;
  created_at: string;
  login: string;
  bio: string;
  public_repos: string;
  followers: string;
  following: string;
  location: string;
  twitter_username: string;
  blog: string;
  company: string;
};

const Home: NextPage = () => {
  const [isLightMode, setMode] = useState(true);
  const [isUser, setIsUser] = useState(true);
  const [user, setUser] = useState<User>({
    name: '',
    avatar_url: '',
    created_at: '',
    login: '',
    bio: '',
    public_repos: '',
    followers: '',
    following: '',
    location: '',
    twitter_username: '',
    blog: '',
    company: '',
  });

  const handleMode = () => {
    setMode((prevState) => !prevState);
  };

  const fetchData = async (user: string) => {
    await octokit
      .request(`GET /users/${user}`, {
        username: 'kazikkluz',
      })
      .then((result) => {
        const foundUser = result.data as User;
        const newUser = {
          name: foundUser.name,
          avatar_url: foundUser.avatar_url,
          created_at: foundUser.created_at,
          login: foundUser.login,
          bio: foundUser.bio,
          public_repos: String(foundUser.public_repos),
          followers: String(foundUser.followers),
          following: String(foundUser.following),
          location: foundUser.location,
          twitter_username: foundUser.twitter_username,
          blog: foundUser.blog,
          company: foundUser.company,
        };

        setUser(newUser);
      })
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
      <Mainbox user={user} />
    </>
  );
};

export default Home;
