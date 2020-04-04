import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const StyledLogo = Styled.div`
  font-weight: 700;
`;

export default function Logo() {
  return (
    <div>
      <StyledLogo>
        <Link to="/">Logo</Link>
      </StyledLogo>
    </div>
  );
}
