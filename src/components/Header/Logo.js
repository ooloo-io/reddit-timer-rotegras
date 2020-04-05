import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { ReactComponent as NavLogo } from './logo.svg';

const StyledLogo = Styled.div`
  font-weight: 700;
  margin-top: 5px;
`;

export default function Logo() {
  return (
    <div>
      <StyledLogo>
        <Link to="/">
          <NavLogo />
        </Link>
      </StyledLogo>
    </div>
  );
}
