import React from 'react';
import Styled from 'styled-components';
import NavBar from './NavBar';
import Logo from './Logo';

const StyledHeader = Styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100px;
  padding: 0 80px;
  box-sizing: border-box;
  z-index: 100;
`;


export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
    </StyledHeader>
  );
}
