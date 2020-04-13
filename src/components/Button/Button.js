import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styles';


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
