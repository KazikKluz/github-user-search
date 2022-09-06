import React from 'react';
import Image from 'next/image';

import { User } from '../../pages/index';
import Spinner from '../spinner/spinner.component';

import DateConverter from '../../utils/dateConverter';

import UserLink from '../userlink/userlink.component';

import Location from '../../public/SVG/icon-location.svg';
import Company from '../../public/SVG/icon-company.svg';
import Twitter from '../../public/SVG/icon-twitter.svg';
import Website from '../../public/SVG/icon-website.svg';

type ReactProps = {
  user: User;
};

import styles from './mainbox.module.scss';

const Mainbox = ({ user }: ReactProps) => {
  const Content = (user: User) => {
    if (user === undefined) {
      return <Spinner />;
    } else {
      return (
        <>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={user.avatar_url}
              alt='avatar'
              width={117}
              height={117}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.line1}>
              <h1 className={styles.name}>{user.name}</h1>
              <p className={styles.date}>
                Joined {DateConverter(user.created_at)}
              </p>
            </div>
            <div className={styles.line2}>
              <p className={styles.login}>@{user.login}</p>
            </div>
            <div className={styles.line3}>
              <p className={styles.bio}>
                {user.bio ? user.bio : 'This profile has no bio'}
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  Repos
                  <span className={styles.number}>{user.public_repos}</span>
                </div>
                <div className={`${styles.stat} ${styles.followers}`}>
                  Followers
                  <span className={styles.number}>{user.followers}</span>
                </div>
                <div className={styles.stat}>
                  Following
                  <span className={styles.number}>{user.following}</span>
                </div>
              </div>
              <div className={styles.links}>
                <UserLink userData={user.location} customClass='location'>
                  <Location />
                </UserLink>
                <UserLink
                  userData={user.twitter_username}
                  customClass='twitter'
                >
                  <Twitter />
                </UserLink>
                <UserLink
                  userData={user.blog}
                  customClass='website'
                  realLink={true}
                >
                  <Website />
                </UserLink>
                <UserLink userData={user.company} customClass='company'>
                  <Company />
                </UserLink>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return <main className={styles.main}>{Content(user)}</main>;
};

export default Mainbox;
