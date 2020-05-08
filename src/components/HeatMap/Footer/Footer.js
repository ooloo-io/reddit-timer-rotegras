import React from 'react';
import PropTypes from 'prop-types';
import { Text, Bold } from './Footer.styles';


export default function Footer({ timezone }) {
  return (
    <Text>
      All times are shown in your timezone:
      {' '}
      <Bold>
        {timezone}
      </Bold>
    </Text>
  );
}


Footer.propTypes = {
  timezone: PropTypes.string.isRequired,
};
