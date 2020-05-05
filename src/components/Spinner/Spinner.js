import React from 'react';
import { ReactComponent as SpinnerSvg } from './loading-spinner.svg';
import { Wrapper } from './Spinner.styles';


export default function Spinner() {
  return (
    <Wrapper>
      <SpinnerSvg />
    </Wrapper>
  );
}
