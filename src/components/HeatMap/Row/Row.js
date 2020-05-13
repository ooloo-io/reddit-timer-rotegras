import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import { Wrapper, RowName, Text } from './Row.styles';


export default function Row({
  weekDayData, dayLabel, weekDay,
}) {
  return (
    <Wrapper>
      <RowName>
        <Text>
          {dayLabel}
        </Text>
      </RowName>
      {
        weekDayData.map((hourData, hour) => (
          <Cell
            // eslint-disable-next-line react/no-array-index-key
            key={`${weekDay}${hour}`}
            itemsNumber={hourData.length}
            hour={hour}
            weekDay={weekDay}
            hourData={hourData}
          />
        ))
      }
    </Wrapper>
  );
}


Row.propTypes = {
  weekDayData: PropTypes.arrayOf(PropTypes.array).isRequired,
  dayLabel: PropTypes.string.isRequired,
  weekDay: PropTypes.number.isRequired,
};
