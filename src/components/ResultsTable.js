import React from 'react';
import Styled from 'styled-components';

const StyledResultsTable = Styled.div`
  display: block;
  width: 782px;
  height: 420px;
  background-color: #eee;
  margin-top: 98px;
  padding: 1rem;
  margin-bottom: 200px;
`;

export default function ResultsTable() {
  return (
    <StyledResultsTable>
      Results Table Component
    </StyledResultsTable>
  );
}
