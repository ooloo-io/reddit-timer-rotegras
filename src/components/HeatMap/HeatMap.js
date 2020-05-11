import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Header from './Header';
import Footer from './Footer';
import { Wrapper } from './HeatMap.styles';


const dayLabels = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];

export default function HeatMap({ data }) {
  const [activeCell, onCellClick] = useState([]);

  const timezoneDifference = () => new Date().getTimezoneOffset() * 60;


  const tableData = useMemo(() => {
    const orderPosts = new Array(7).fill([]).map(() => new Array(24).fill([]));

    data.forEach((item) => {
      const clientDate = (item.data.created_utc + timezoneDifference()) * 1000;
      const date = new Date(clientDate);
      const day = Number(date.getDay());
      const time = Number(date.toLocaleTimeString('de-De').slice(0, 2));
      orderPosts[day][time] = [...orderPosts[day][time].concat(item.data)];
    });

    return orderPosts;
  }, [data]);

  const toggleActiveCell = (activeRow, activeColumn) => {
    onCellClick([activeRow, activeColumn]);
  };

  return (
    <Wrapper>
      <Header />
      {
        tableData.map((weekDayData, weekDay) => (
          <Row
            key={dayLabels[weekDay]}
            data={weekDayData}
            weekDay={weekDay}
            dayLabel={dayLabels[weekDay]}
            onCellClick={toggleActiveCell}
            activeCell={activeCell}
          />
        ))
      }
      <Footer />
    </Wrapper>
  );
}


HeatMap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
