import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledButton = Styled.button`
  background-color: #fdb755;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 11px 15px 10px 15px;
`;

export default function Button({ text }) {
  return (
    <StyledButton>
      { text }
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: '',
};
