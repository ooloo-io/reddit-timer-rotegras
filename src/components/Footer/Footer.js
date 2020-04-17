import React from 'react';
import { ReactComponent as FooterLogo } from './sign.svg';
import {
  FooterWrapper,
  FooterLinkWrapper,
  FooterLogoWrapper,
} from './Footer.styles';


export default function Footer() {
  return (
    <FooterWrapper>
      <FooterLinkWrapper
        as="a"
        href="https://www.ooloo.io"
        target="_blank"
        rel="noopener no-referrer"
      >
        ooloo.io
      </FooterLinkWrapper>

      <FooterLogoWrapper to="/">
        <FooterLogo />
      </FooterLogoWrapper>

      <FooterLinkWrapper to="/terms-and-privacy">
        Terms & Privacy
      </FooterLinkWrapper>
    </FooterWrapper>
  );
}
