import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as FooterLogo } from './sign.svg';


const StyledFooter = Styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 0 250px;
`;

const StyledFooterLink = Styled(Link)`
  font-size: ${({ theme }) => theme.textsize.smaller};
  color: ${({ theme }) => theme.colors.greyDark} ; letter-spacing: .6px; &:last-child {
    padding-bottom: 3px;
  };
`;

const StyledFooterLogo = Styled(Link)`
    margin-left: 56px;
    margin-top: 1px;
`;


export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterLink
        as="a"
        href="https://www.ooloo.io"
        target="_blank"
        rel="noopener no-referrer"
      >
        ooloo.io
      </StyledFooterLink>

      <StyledFooterLogo to="/">
        <FooterLogo />
      </StyledFooterLogo>

      <StyledFooterLink to="/terms-and-privacy">
        Terms & Privacy
      </StyledFooterLink>
    </StyledFooter>
  );
}
