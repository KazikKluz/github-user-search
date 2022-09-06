type Props = {
  userData: string | null;
  customClass: string;
  children: JSX.Element;
  realLink?: boolean;
};

import styles from './userlink.module.scss';

const UserLink = ({ userData, customClass, children, realLink }: Props) => {
  const Content = () => {
    if (realLink === true) {
      return userData ? <a href={userData}>{userData}</a> : 'Not Available';
    } else {
      return userData ? userData : 'Not Available';
    }
  };

  return (
    <div className={`${styles.link} ${userData ? '' : styles.empty}`}>
      <div className={styles[customClass]}>{children}</div>
      {Content()}
    </div>
  );
};

export default UserLink;
