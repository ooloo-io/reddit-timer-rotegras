import React from 'react';
import { Link } from 'react-router-dom';
import table from './table.png';
import config from '../../config';
import { Wrapper, Image } from './HeatMap.styles';


export default function HeatMap() {
  return (
    <Wrapper>
      <Link to={`/search/${config.defaultReddit}`}>
        <Image src={table} alt="reddit heatmap" />
      </Link>
    </Wrapper>
  );
}
