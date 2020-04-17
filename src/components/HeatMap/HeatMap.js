import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import table from './table.png';
import config from '../../config';


const StyledTable = styled.div`
  margin-bottom: 45px;
`;

const StyledImg = styled.img`
  margin-left: 1px;
  margin-top: -1.5px;
`;


export default function Table() {
  return (
    <StyledTable>
      <Link to={`/search/${config.defaultReddit}`}>
        <StyledImg src={table} alt="reddit heatmap" />
      </Link>
    </StyledTable>
  );
}
