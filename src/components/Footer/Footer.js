import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as FooterLogo } from './sign.svg';


const StyledFooter = Styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 250px;
  box-sizing: border-box;
`;

const StyledFooterLink = Styled(Link)`
  font-size: 13px;;
  color: #636363;
  letter-spacing: .6px;
`;

const StyledA = Styled.a`
  font-size: 13px;;
  color: #636363;
  letter-spacing: .6px;
`;

const StyledFooterLogo = Styled(Link)`
    margin-left: 55px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledA
        href="https://www.ooloo.io"
        target="_blank"
        rel="noopener no-referrer"
      >
        ooloo.io
      </StyledA>

      <StyledFooterLogo to="/">
        <FooterLogo />
      </StyledFooterLogo>

      <StyledFooterLink to="/terms-and-privacy">
        Terms & Privacy
      </StyledFooterLink>
    </StyledFooter>
  );
}
