import React from 'react';
import styled from 'styled-components';


const FooterDiv = styled.div`
  display: flex;
  background-color: #000000;
  color: #fff;
  height: 50px;
  width: 100vw;
  padding: 10px 2vw;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

function Footer(props) {
  return (
    <FooterDiv>
      I'm the footer
    </FooterDiv>
  );
}

export default Footer;