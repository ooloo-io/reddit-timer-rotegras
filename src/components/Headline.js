import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';


const StyledHeadline = Styled.h1`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin: 30px auto 10px;
`;


export default function Headline({children}) {
  return (
    <StyledHeadline>
      {children}
    </StyledHeadline>
  );
}

Headline.propTypes = {
  children: PropTypes.node.isRequired,
}