import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveCell, setHourPosts } from '../../../redux/actions/actions';
import { Wrapper } from './Cell.styles';


function Cell({
// eslint-disable-next-line no-shadow
  itemsNumber, weekDay, hour, activeCell, setActiveCell, hourData, setHourPosts,
}) {
  const isActive = activeCell[0] === weekDay && activeCell[1] === hour;

  const handleClick = () => {
    setActiveCell([weekDay, hour]);
    setHourPosts(hourData);
  };

  return (
    <Wrapper
      isActive={isActive}
      onClick={handleClick}
      weekDay={weekDay}
      hour={hour}
    >
      { itemsNumber }
    </Wrapper>
  );
}

Cell.propTypes = {
  itemsNumber: PropTypes.number.isRequired,
  weekDay: PropTypes.number.isRequired,
  hour: PropTypes.number.isRequired,
  activeCell: PropTypes.arrayOf(PropTypes.number),
  setActiveCell: PropTypes.func.isRequired,
  setHourPosts: PropTypes.func.isRequired,
  hourData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Cell.defaultProps = {
  activeCell: [null, null],
};

const mapStateToProps = (state) => ({ activeCell: state.activeCell });

const mapDispatchToProps = { setActiveCell, setHourPosts };


export default connect(mapStateToProps, mapDispatchToProps)(Cell);
