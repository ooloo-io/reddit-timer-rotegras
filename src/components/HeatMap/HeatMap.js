import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Header from './Header';
import { Wrapper, TimeLabel } from './HeatMap.styles';


const dayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function HeatMap({ data = [] }) {
  const [tableData, setTableData] = useState([]);
  const [activeCell, setActiveCell] = useState([])

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

  const toggleActiveCell = (activeRow, activeColumn) => {
    setActiveCell([activeRow, activeColumn])
  };

  return (
    <Wrapper>
      <Header />
      {
        tableData.map((row, i) =>
          <Row data={row} row={i}
            dayLabel={dayLabels[i]}
            getActiveCell={toggleActiveCell}
            activeCell={activeCell}
          />)
      }
    </Wrapper>
  );
}


HeatMap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
