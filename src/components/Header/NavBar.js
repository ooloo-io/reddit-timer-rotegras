import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import config from '../../config';


const StyledNavBar = Styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
`;

const StyledLink = Styled(Link)`
  font-size: ${({ theme }) => theme.textsize.body};
  color: ${({ theme }) => theme.colors.greyDark};
  margin: 1px 0 0 26px;

  &:first-child {
    margin-right: .25px;
  }
`;


export default function NavBar() {
  return (
    <StyledNavBar>
      <StyledLink to={`/search/${config.defaultReddit}`}>Search</StyledLink>
      <StyledLink to="/how-it-works">How it works</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </StyledNavBar>
  );
}
