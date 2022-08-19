import React from 'react';

type Props = {
  mode: boolean;
  handleClick: () => void;
};

const Navbar = ({ mode, handleClick }: Props) => {
  return (
    <nav>
      <div>devfinder</div>
      <button className='modeswitch' onClick={handleClick}>
        {mode ? 'DARK' : 'LIGHT'}
      </button>
    </nav>
  );
};

export default Navbar;
