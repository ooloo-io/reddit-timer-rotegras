import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Cell.styles';


export default function Cell({ itemsNumber }) {
  return (
    <Wrapper>
      { itemsNumber }
    </Wrapper>
  );
}

Cell.propTypes = {
  itemsNumber: PropTypes.number.isRequired,
};
