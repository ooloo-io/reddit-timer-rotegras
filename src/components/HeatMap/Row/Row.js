import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import { Wrapper, RowName } from './Row.styles';


export default function Row({ data, dayLabel, row, getActiveCell, activeCell }) {
  return (
    <Wrapper>
      <RowName>{dayLabel}</RowName>
      {
        data.map((item, i) => {
          return (
            <Cell
              key={row}
              itemsNumber={item.length}
              column={i}
              row={row}
              activeCell={activeCell}
              getActiveCell={getActiveCell}
            />
          );
        })
      }
    </Wrapper>
  );
}


Row.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  dayLabel: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  activeCell: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  getActiveCell: PropTypes.func.isRequired,
};
