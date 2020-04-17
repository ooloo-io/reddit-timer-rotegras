import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NavLogo } from './logo.svg';
import LogoWrapper from './HeaderLogo.styles';

export default function HeaderLogo() {
  return (
    <div>
      <LogoWrapper>
        <Link to="/">
          <NavLogo />
        </Link>
      </LogoWrapper>
    </div>
  );
}
