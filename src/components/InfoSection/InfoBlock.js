import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTitle,
  StyledBlock,
} from './InfoBlock.styles';

export default function InfoBlock({ title, children }) {
  return (
    <StyledBlock>
      <StyledTitle>
        {title}
      </StyledTitle>
      {children}
    </StyledBlock>
  );
}

InfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
