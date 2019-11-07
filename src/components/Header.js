import React from 'react';
import '../styles/Header.css';

import Navbar from './Navbar';

function Header(props) {
  return (
    <div className="Header">
      <h1 className='title'>This is the Title</h1>
      <Navbar />
    </div>
  );
}

export default Header;