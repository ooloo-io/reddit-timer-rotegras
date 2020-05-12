import React from 'react';
import { Wrapper, TimeLabel, Text } from './Header.styles';


const timeLabels = [
  '12:00am',
  '2:00am',
  '4:00am',
  '6:00am',
  '8:00am',
  '10:00am',
  '12:00pm',
  '2:00pm',
  '4:00pm',
  '6:00pm',
  '8:00pm',
  '10:00pm',
];

export default function Header() {
  return (
    <Wrapper>
      {
        timeLabels.map((item) => (
          <TimeLabel key={item}>
            <Text>
              {item}
            </Text>
          </TimeLabel>
        ))
      }
    </Wrapper>
  );
}
