import React from 'react';
import Styled from 'styled-components';

const StyledTable = Styled.div`
  display: block;
  width: 1115px;
  height: 333px;
  background-color: #eee;
  padding: 1rem;
  margin: 102px auto 0;
`;

export default function Table() {
  return (
    <StyledTable>
      Table Component
    </StyledTable>
  );
}
