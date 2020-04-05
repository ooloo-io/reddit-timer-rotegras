import React from 'react';
import Styled from 'styled-components';
// import { ReactComponent as FooterLogo } from '../Header/logo.svg';
import { ReactComponent as FooterLogo } from './sign.svg';

const StyledFooter = Styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 250px;
  box-sizing: border-box;

  a.footer-link {
    font-size: 13px;
    letter-spacing: .6px;
    color: #636363;
  }

  .footer-logo {
    margin-left: 55px;
  }
`;


export default function Footer() {
  return (
    <StyledFooter>
      <a
        className="footer-link"
        href="https://www.ooloo.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        ooloo.io
      </a>
      <a className="footer-link footer-logo" href="/">
        <FooterLogo />
      </a>
      <a className="footer-link" href="/terms-and-privacy">Terms & Privacy</a>
    </StyledFooter>
  );
}
