import React from 'react';
import Styled from 'styled-components';
import NavBar from './NavBar';
import Logo from './Logo';


const StyledHeader = Styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 80px;
`;


export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
    </StyledHeader>
  );
}
