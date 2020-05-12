import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Header from './Header';
import Footer from './Footer';
import { Wrapper } from './HeatMap.styles';
import { connect } from 'react-redux';


const dayLabels = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];

function HeatMap({ data }) {
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


  return (
    <Wrapper>
      <Header />
      {
        tableData.map((weekDayData, weekDay) => (
          <Row
            key={dayLabels[weekDay]}
            weekDayData={weekDayData}
            weekDay={weekDay}
            dayLabel={dayLabels[weekDay]}
          />
        ))
      }
      <Footer />
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
};

HeatMap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};


export default connect(mapStateToProps)(HeatMap);
