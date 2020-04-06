import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Text = Styled.div`
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  text-align: ${(props) => props.align}
`;

export default function TextField({
  align,
  children,
  elem,
  mt,
  mb,
}) {
  return (
    <Text
      as={elem}
      mt={mt}
      mb={mb}
      align={align}
    >
      {children}
    </Text>
  );
}

TextField.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  elem: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
};

TextField.defaultProps = {
  align: 'left',
  elem: 'div',
  mt: '0',
  mb: '0',
};
