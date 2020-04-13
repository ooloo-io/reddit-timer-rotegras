import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const StyledButton = Styled(Link)`
  background: ${({ theme }) => theme.colors.buttonBg};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.textsize.small};
  font-weight: 500;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  padding: 10px 15px 10px 15px;
`;

export default function Button({ text, path }) {
  return (
    <StyledButton
      to={path}
    >
      { text }
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
};

Button.defaultProps = {
  text: '',
  path: '/',
};
