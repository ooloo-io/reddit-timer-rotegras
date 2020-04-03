import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledButton = Styled.button`
  background-color: #fdb755;
  color: #fff;
  padding: 10px 20px;
  margin-top: 26px;
  border: none;
  text-transform: uppercase;
  border-radius: 4px;
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
