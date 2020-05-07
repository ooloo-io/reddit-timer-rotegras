import React from 'react';
import { Link } from 'react-router-dom';
import table from './table.png';
import config from '../../../config';
import { Wrapper, Image } from './StaticHeatMap.styles';

export default function StaticHeatMap() {
  return (
    <Wrapper>
      <Link to={`/search/${config.defaultReddit}`}>
        <Image src={table} alt="reddit heatmap" />
      </Link>
    </Wrapper>
  );
}