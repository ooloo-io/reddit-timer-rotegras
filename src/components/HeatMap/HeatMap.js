import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Header from './Header';
import Footer from './Footer';
import { Wrapper } from './HeatMap.styles';


const dayLabels = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];

export default function HeatMap({ data }) {
  const [tableData, setTableData] = useState([]);
  const [activeCell, setActiveCell] = useState([]);
  const [timezone, setTimezone] = useState('');
  const [timezoneDifference, setTimezoneDifference] = useState(0);


  useEffect(() => {
    const clientTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const clientTimezoneDifference = (new Date().getTimezoneOffset()) * 60;
    setTimezone(clientTimezone);
    setTimezoneDifference(clientTimezoneDifference);
  }, []);

  useEffect(() => {
    const buildTable = () => {
      const orderPosts = new Array(7).fill([]).map(() => new Array(24).fill([]));

      data.forEach((item) => {
        const clientDate = (item.data.created_utc + timezoneDifference) * 1000;
        const date = new Date(clientDate);
        const day = Number(date.getDay());
        const time = Number(date.toLocaleTimeString('de-De').slice(0, 2));
        orderPosts[day][time] = [...orderPosts[day][time].concat(item.data)];
      });
      setTableData(orderPosts);
    };

    buildTable();
  }, [data, timezoneDifference]);

  const toggleActiveCell = (activeRow, activeColumn) => {
    setActiveCell([activeRow, activeColumn]);
  };

  return (
    <Wrapper>
      <Header />
      {
        tableData.map((row, i) => (
          <Row
            key={dayLabels[i]}
            data={row}
            row={i}
            dayLabel={dayLabels[i]}
            getActiveCell={toggleActiveCell}
            activeCell={activeCell}
          />
        ))
      }
      <Footer timezone={timezone} />
    </Wrapper>
  );
}


HeatMap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
