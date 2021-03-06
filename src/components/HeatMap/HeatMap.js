import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';
import Row from './Row';
import Header from './Header';
import Footer from './Footer';
import { Wrapper } from './HeatMap.styles';


function HeatMap({ groupedPosts }) {
  const { dayLabels } = config;

  return (
    <Wrapper>
      <Header />
      {
        groupedPosts.map((weekDayData, weekDay) => (
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

const mapStateToProps = (state) => ({ groupedPosts: state.groupedPosts });

HeatMap.propTypes = {
  groupedPosts: PropTypes.arrayOf(PropTypes.any).isRequired,
};


export default connect(mapStateToProps)(HeatMap);
