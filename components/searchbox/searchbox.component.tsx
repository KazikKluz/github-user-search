import React, { useState } from 'react';

type ReactProps = {
  fetchData: (arg0: string) => void;
  isUser: boolean;
};

const Searchbox = ({ fetchData, isUser }: ReactProps) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    return setText(e.currentTarget.value);
  };

  return (
    <>
      <input
        type='text'
        placeholder='Search Github username...'
        alt='searchbox'
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <span>{isUser ? '' : 'No results'}</span>
      <button onClick={() => fetchData(text)}>Search</button>
    </>
  );
};

export default Searchbox;
