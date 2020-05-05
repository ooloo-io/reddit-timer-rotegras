import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Button from '../Button';
import { Input, Wrapper, Prefix } from './InputForm.styles';


function InputForm({ search }) {
  const [redditName, setRedditName] = useState(search);

  const editInput = (e) => setRedditName(e.target.value);

  // needed to update value for menu item search
  useEffect(() => {
    setRedditName(search);
  }, [search]);

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


InputForm.propTypes = {
  search: propTypes.string.isRequired,
};


export default InputForm;
