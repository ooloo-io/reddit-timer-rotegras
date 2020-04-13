import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import {
  Input,
  SearchGroup,
  Prefix,
} from './InputForm.styles';


function InputForm() {
  const location = useLocation();
  const loc = useParams();
  // console.log(loc);

  const [redditName, setReddit] = useState('');

  const redditFromUrl = () => {
    const reddit = location.pathname.split('/').slice(-1)[0];
    setReddit(reddit);
  };

  const editInput = (e) => { const { value } = e.target; setReddit(value)};

  useEffect(() => {
    redditFromUrl();
  }, [location]);


  return (
    <SearchGroup>
      <Prefix>r /</Prefix>
      <Input
        type="text"
        value={redditName}
        onChange={editInput}
      />

      <Button
        text="Search"
        path={`/search/${redditName}`}
      />
    </SearchGroup>
  );
}

export default InputForm;
