import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Cell.styles';


export default function Cell({
  itemsNumber, weekDay, hour, activeCell, onCellClick,
}) {
  const isActive = activeCell[0] === weekDay && activeCell[1] === hour;

  const handleClick = () => {
    onCellClick(weekDay, hour);
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
  activeCell: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  onCellClick: PropTypes.func.isRequired,
};
