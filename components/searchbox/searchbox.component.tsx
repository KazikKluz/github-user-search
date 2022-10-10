import React, { useState } from 'react';

type ReactProps = {
  fetchData: (arg0: string) => void;
  isUser: boolean;
};

import styles from './searchbox.module.scss';

const Searchbox = ({ fetchData, isUser }: ReactProps) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <div className={styles.search}>
      <svg className={styles.icon}>
        <use xlinkHref='sprite.svg#icon-search'></use>
      </svg>
      <input
        className={styles.input}
        type='text'
        placeholder='Search Github username...'
        alt='searchbox'
        value={text}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') fetchData(text);
        }}
      />
      <div className={`${styles.warning} ${isUser ? '' : styles.visible}`}>
        No results
      </div>
      <button className={styles.btn} onClick={() => fetchData(text)}>
        Search
      </button>
    </div>
  );
};

export default Searchbox;
