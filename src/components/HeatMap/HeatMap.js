import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Row from './Row';
import Header from './Header';
import Footer from './Footer';
import { Wrapper } from './HeatMap.styles';


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
      const time = Number((`0${date.getHours()}`).slice(-2));
      // eslint-disable-next-line
      const row = orderPosts[day][time] = [...orderPosts[day][time].concat(item.data)];
      row.sort((a, b) => (a.created_utc) - (b.created_utc));
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

const mapStateToProps = (state) => ({ data: state.data });

HeatMap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};


export default connect(mapStateToProps)(HeatMap);
