import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';


const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 0 10px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #e9cf86d0;
`;

const NavLink = styled(Link)`
  text-align: center;
  color: #000;
  /* background-color: #e9cf86d0; */
  text-decoration: none;
  width: 100px;
  height: 24px;
  border: 2px solid #000000;
  border-radius: 20px;
  padding-top: 6px;

  :hover {
    color: #d4bc7b;
    background-color: #000000;
  }
`;

function Navbar(props) {
  return (
    <NavbarContainer className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/about">About</NavLink>
    </NavbarContainer>
  );
}

export default Navbar;
