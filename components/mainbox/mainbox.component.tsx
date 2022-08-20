import React from 'react';

import { User } from '../../pages/index';

type ReactProps = {
  user: User;
};

const Mainbox = ({ user }: ReactProps) => {
  return (
    <main>
      <h1>{user.name}</h1>
      <p data-testid='paragraph'>{user.bio}</p>
    </main>
  );
};

export default Mainbox;
