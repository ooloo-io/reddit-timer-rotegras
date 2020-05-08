import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Cell.styles';


export default function Cell({
  itemsNumber, row, column, activeCell, getActiveCell,
}) {
  const [isActive, setActive] = useState(false);
  const thisCell = [row, column];

  useEffect(() => {
    if (activeCell === thisCell) {
      setActive(true);
      return;
    }
    setActive(false);
  }, [activeCell, thisCell]);

  const handleClick = () => {
    getActiveCell(row, column);
  };

  return (
    <Wrapper
      isActive={isActive}
      onClick={handleClick}
      row={row}
      column={column}
    >
      { itemsNumber }
    </Wrapper>
  );
}


Cell.propTypes = {
  itemsNumber: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  activeCell: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  getActiveCell: PropTypes.func.isRequired,
};
