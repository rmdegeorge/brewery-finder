import React from 'react';
import {Link} from "react-router-dom";

import '../styles/Navbar.css';


function Navbar(props) {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;