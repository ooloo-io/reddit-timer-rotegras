import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';


const StyledNavBar = Styled.nav`
  display: flex;
  align-items: center;
  height: 100px;
`;

const StyledLink = Styled(Link)`
  font-weight: 400;
  font-size: 16px;;
  text-decoration: none;
  margin: 1px 0 0 26px;
  color: #636363;

  &:first-child {
    margin-right: .25px;
  }
`;


export default function NavBar() {
  return (
    <StyledNavBar>
      <StyledLink to="/search/javascript">Search</StyledLink>
      <StyledLink to="/how-it-works">How it works</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </StyledNavBar>
  );
}
