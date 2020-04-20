import React from 'react';
import config from '../../../config';
import { Wrapper, LinkWrapper } from './HeaderNavBar.styles';

export default function HeaderNavBar() {
  return (
    <Wrapper>
      <LinkWrapper to={`/search/${config.defaultReddit}`}>Search</LinkWrapper>
      <LinkWrapper to="/how-it-works">How it works</LinkWrapper>
      <LinkWrapper to="/about">About</LinkWrapper>
    </Wrapper>
  );
}
