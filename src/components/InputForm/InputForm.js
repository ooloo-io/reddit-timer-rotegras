import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import {
  Input,
  SearchGroup,
  Prefix,
} from './InputForm.styles';


function InputForm() {
  const { slug } = useParams();

  const [redditName, setRedditName] = useState(slug);

  const editInput = (e) => { const { value } = e.target; setRedditName(value); };

  useEffect(() => {
    setRedditName(slug);
  }, [slug]);

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
