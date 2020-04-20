import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NavLogo } from './logo.svg';
import { Wrapper } from './HeaderLogo.styles';


export default function HeaderLogo() {
  return (
    <div>
      <Wrapper>
        <Link to="/">
          <NavLogo />
        </Link>
      </Wrapper>
    </div>
  );
}
