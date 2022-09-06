import type { NextPage } from 'next';
import { useEffect } from 'react';

import { useState } from 'react';
import { Octokit } from 'octokit';
import Navbar from '../components/navbar/navbar.component';
import Searchbox from '../components/searchbox/searchbox.component';
import Mainbox from '../components/mainbox/mainbox.component';

import styles from './index.module.scss';

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_TOKEN,
});

export type User =
  | {
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
    }
  | undefined;

const Home: NextPage = () => {
  const [isUser, setIsUser] = useState(true);
  const [user, setUser] = useState<User>(undefined);
  const [username, setUsername] = useState('octocat');

  useEffect(() => {
    const fetchData = async () => {
      await octokit
        .request(`GET /users/${username}`, {
          username: 'kazikkluz',
        })
        .then((result) => {
          const foundUser = result.data as User;

          if (foundUser !== undefined) {
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
            setIsUser(true);
          }
        })
        .catch((err) => {
          if (err.response.status == 404) {
            setIsUser(false);
          }
        });
    };
    fetchData();
  }, [username]);

  return (
    <div className={styles.main}>
      <Navbar />
      <Searchbox fetchData={setUsername} isUser={isUser} />
      <Mainbox user={user} />
    </div>
  );
};

export default Home;
