import React from 'react';
import Styled from 'styled-components';


const StyledHeadline = Styled.h1`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin: 30px auto 10px;
`;


export default StyledHeadline;