import React from 'react';
import config from '../../../config';
import { NavBarWrapper, LinkWrapper } from './HeaderNavBar.styles';

export default function HeaderNavBar() {
  return (
    <NavBarWrapper>
      <LinkWrapper to={`/search/${config.defaultReddit}`}>Search</LinkWrapper>
      <LinkWrapper to="/how-it-works">How it works</LinkWrapper>
      <LinkWrapper to="/about">About</LinkWrapper>
    </NavBarWrapper>
  );
}
