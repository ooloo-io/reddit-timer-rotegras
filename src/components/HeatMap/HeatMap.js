import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import table from './table.png';
import config from '../../config';
import Row from './Row';
import { Wrapper, Image } from './HeatMap.styles';

export default function HeatMap({ data = [] }) {
  const [tableData, setTableData] = useState([]);

  const buildTable = () => {
    const orderPosts = new Array(7).fill([]).map(() => new Array(24).fill([]));

    data.map((item) => {
      const date = new Date(item.data.created * 1000);
      const day = Number(date.getDay());
      const time = Number(date.toLocaleTimeString().slice(0, 2));
      orderPosts[day][time] = [...orderPosts[day][time].concat(item.data)];
    });
    setTableData(orderPosts);
  };

  useEffect(() => {
    buildTable();
  }, [data]);


  return (
    <Wrapper>
      {
        tableData.map((row) => <Row data={row} />)
      }
      <Link to={`/search/${config.defaultReddit}`}>
        <Image src={table} alt="reddit heatmap" />
      </Link>
    </Wrapper>
  );
}

// HeatMap.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.any).isRequired,
// };
