import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import { Wrapper, RowName, Text } from './Row.styles';


export default function Row({
  data, dayLabel, weekDay, onCellClick, activeCell,
}) {
  return (
    <Wrapper>
      <RowName>
        <Text>
          {dayLabel}
        </Text>
      </RowName>
      {
        data.map((item, hour) => (
          <Cell
            // eslint-disable-next-line react/no-array-index-key
            key={`${weekDay}${hour}`}
            itemsNumber={item.length}
            hour={hour}
            weekDay={weekDay}
            activeCell={activeCell}
            onCellClick={onCellClick}
          />
        ))
      }
    </Wrapper>
  );
}


Row.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dayLabel: PropTypes.string.isRequired,
  weekDay: PropTypes.number.isRequired,
  activeCell: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  onCellClick: PropTypes.func.isRequired,
};
