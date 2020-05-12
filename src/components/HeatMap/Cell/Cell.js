import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Cell.styles';
import { connect } from 'react-redux';
import { setActiveCell } from '../../../redux/actions/actions';


function Cell({
  itemsNumber, weekDay, hour, activeCell, setActiveCell,
}) {
  const isActive = activeCell[0] === weekDay && activeCell[1] === hour;

  const handleClick = () => {
    setActiveCell([weekDay, hour]);
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
  activeCell: PropTypes.arrayOf(PropTypes.number).isRequired,
  setActiveCell: PropTypes.func.isRequired,
};

Cell.defaultProps = {
  activeCell: [null, null]
};

const mapStateToProps = (state) => {
  return {
    activeCell: state.activeCell,
  }
};

const mapDispatchToProps = { setActiveCell };


export default connect(mapStateToProps, mapDispatchToProps)(Cell);
