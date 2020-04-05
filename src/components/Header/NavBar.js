import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styled from 'styled-components';


const StyledNavBar = Styled.nav`
  display: flex;
  align-items: center;
  height: 100px;
`;

const StyledLink = Styled(Link)`
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;
  margin: 0 0 0 25px;
  color: #636363;
`;


export default function NavBar({ searchPath }) {
  return (
    <StyledNavBar>
      <StyledLink to={`/search/${searchPath}`}>Search</StyledLink>
      <StyledLink to="/how-it-works">How it works</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </StyledNavBar>
  );
}

NavBar.propTypes = {
  searchPath: PropTypes.string,
};

NavBar.defaultProps = {
  searchPath: 'javascript',
};
