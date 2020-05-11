import React from 'react';
import { Text, Bold } from './Footer.styles';


export default function Footer() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

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
