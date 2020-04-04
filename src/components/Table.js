import React from 'react';
import Styled from 'styled-components';

const StyledTable = Styled.div`
  display: block;
  width: 1115px;
  height: 333px;
  background-color: #eee;
  padding: 1rem;
  margin-top: 102px;
`;

export default function Table() {
  return (
    <StyledTable>
      Table Component
    </StyledTable>
  );
}
