import React from 'react';
import { ReactComponent as FooterLogo } from './sign.svg';
import { Wrapper, LinkWrapper, LogoWrapper } from './Footer.styles';


export default function Footer() {
  return (
    <Wrapper>
      <LinkWrapper
        as="a"
        href="https://www.ooloo.io"
        target="_blank"
        rel="noopener no-referrer"
      >
        ooloo.io
      </LinkWrapper>

      <LogoWrapper to="/">
        <FooterLogo />
      </LogoWrapper>

      <LinkWrapper to="/terms-and-privacy">
        Terms & Privacy
      </LinkWrapper>
    </Wrapper>
  );
}
