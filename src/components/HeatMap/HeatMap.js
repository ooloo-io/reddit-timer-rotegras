import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import table from './table.png';


const StyledTable = Styled.div`
  // to be modified;
`;

const StyledImg = Styled.img`
  margin-left: 1px;
  margin-top: -1.5px;
`;


export default function Table() {
  return (
    <StyledTable>
      <Link to="/search/javascript">
        <StyledImg src={table} alt="reddit heatmap" />
      </Link>
    </StyledTable>
  );
}
