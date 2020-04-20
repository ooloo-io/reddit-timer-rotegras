import React from 'react';
import HeaderNavBar from './HeaderNavBar';
import HeaderLogo from './HeaderLogo';
import { Wrapper } from './Header.styles';


export default function Header() {
  return (
    <Wrapper>
      <HeaderLogo />
      <HeaderNavBar />
    </Wrapper>
  );
}
