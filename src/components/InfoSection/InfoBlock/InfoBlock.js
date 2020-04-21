import React from 'react';
import PropTypes from 'prop-types';
import { Block, BlockTitle } from './InfoBlock.styles';

export default function InfoBlock({ title, children }) {
  return (
    <Block>
      <BlockTitle>
        {title}
      </BlockTitle>
      {children}
    </Block>
  );
}

InfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
