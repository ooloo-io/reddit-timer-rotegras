import React from 'react';
import Styled from 'styled-components';
import Button from './Button';


const SearchGroup = Styled.form`
  display: flex;
  flex-direction: row;
  margin: 22px auto 0;
`;

const Input = Styled.input`
  display: flex;
  flex-direction: row;
  height: 322x;
  width: 355px;
  font-size: ${({ theme }) => theme.textsize.small};
  padding-left: 15px;
  margin: 0 10px 0 28px;
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.colors.greyLight};

  &::before {
    position: absolute:
    display: block;
    content: '/r';
    left: -20px;
    width: 40px;
    height: 100%;
    background: yellow;
  }
`;


export default function InputForm() {
  return (
    <SearchGroup>
      <Input
        placeholder="Search"
      />
      <Button
        text="Search"
        type="submit"
      />
    </SearchGroup>
  );
}