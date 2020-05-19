import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveCell } from '../../../redux/actions/actions';
import { Wrapper } from './Cell.styles';


function Cell({
// eslint-disable-next-line no-shadow
  itemsNumber, weekDay, hour, activeCell, setActiveCell,
}) {
  const isActive = activeCell.day === weekDay && activeCell.hour === hour;

  const handleClick = () => {
    setActiveCell({ day: weekDay, hour });
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
  activeCell: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  setActiveCell: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ activeCell: state.activeCell });

const mapDispatchToProps = { setActiveCell };


export default connect(mapStateToProps, mapDispatchToProps)(Cell);
