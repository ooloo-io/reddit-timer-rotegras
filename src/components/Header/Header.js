import React from 'react';
import HeaderNavBar from './HeaderNavBar/HeaderNavBar';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderWrapper from './Header.styles';


export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderNavBar />
    </HeaderWrapper>
  );
}
