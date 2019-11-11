import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const Title = styled.h1`
  text-align: center;
`;
function Header(props) {
  return (
    <HeaderDiv>
      <Title>This is the Title</Title>
      
    </HeaderDiv>
  );
}

export default Header;