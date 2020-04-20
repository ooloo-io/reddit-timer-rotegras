import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button';
import { Input, Wrapper, Prefix } from './InputForm.styles';


function InputForm() {
  const { slug } = useParams();

  const [redditName, setRedditName] = useState(slug);

  const editInput = (e) => setRedditName(e.target.value);

  useEffect(() => {
    setRedditName(slug);
  }, [slug]);

  return (
    <Wrapper>

      <Prefix>r /</Prefix>

      <Input
        type="text"
        value={redditName}
        onChange={editInput}
      />

      <Button to={`/search/${redditName}`}>
        Search
      </Button>
    </Wrapper>
  );
}


export default InputForm;
