import React from 'react';
import Styled from 'styled-components';

const STable = Styled.div`
  display: block;
  width: 1115px;
  height: 333px;
  background-color: #eee;
  padding: 1rem;
  margin-top: 102px;
`;

export default function Table() {
  return (
    <STable>
      Table Component
    </STable>
  );
}
