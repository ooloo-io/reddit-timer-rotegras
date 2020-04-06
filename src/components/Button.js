import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledButton = Styled.button`
  background: ${({ theme }) => theme.colors.buttonBg};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.textsize.small};
  font-weight: 500;
  width: auto;
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
