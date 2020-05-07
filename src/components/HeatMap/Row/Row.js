import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import { Wrapper } from './Row.styles';


const dayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Row({ data, dayLabel }) {
  return (
    <Wrapper>
      <div>
        { dayLabel }
      </div>
      {
        data.map((item, i) => {
          return (
            <Cell
              itemsNumber={item.length}
              dayLabel={dayLabels[i]}
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
};
