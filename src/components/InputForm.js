import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Styled from 'styled-components';
import Button from './Button';

const SearchGroup = Styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 502px;
  height: 32px;
  margin-top: 20px;

  &:before {
    display: block;
    content: 'r /';
    position: absolute:
    top: 0;
    left: 0px;
    width: 20px;
    height: 32px;
    line-height: 32px;
    vertilcal-align: middle;
    padding-top: 1px;
  }
`;

const Input = Styled.input`
  display: flex;
  flex-direction: row;
  height: 36px;
  width: 371px;
  font-size: ${({ theme }) => theme.textsize.small};
  padding: 0 17px 1px;
  margin: 1.4px 10px 0 7px;
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.colors.greyLight};
`;

const ButtonWrapper = Styled.div`
  width: 92px;
  letter-spacing: .3px;
`;


function InputForm() {
  const location = useLocation();

  const [redditName, setReddit] = useState('');

  const redditFromUrl = () => {
    const reddit = location.pathname.split('/').slice(-1)[0];
    setReddit(reddit);
  };

  const editInput = (e) => {
    const { value } = e.target;
    setReddit(value);
  };

  useEffect(() => {
    redditFromUrl();
  }, [location]);


  return (
    <SearchGroup>
      <Input
        type="text"
        // placeholder={redditName}
        value={redditName}
        onChange={(e) => editInput(e)}
      />

      <ButtonWrapper>
        <Button
          text="Search"
          path={`/search/${redditName}`}
        />
      </ButtonWrapper>
    </SearchGroup>
  );
}

export default InputForm;
