import React from 'react';
import Styled from 'styled-components';
import Button from '../components/Button';
import Table from '../components/Table';
import ResultsTable from '../components/ResultsTable';

const SearchGroup = Styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 56px;
`;

const Input = Styled.input`
  display: flex;
  flex-direction: row;
  height: 34px;
  margin-right: 10px;
  width: 370px;
`;

export default function Search() {
  return (
    <section className="page">
      <h1>
        Find the best time for a subreddit
      </h1>
      <SearchGroup>
        <Input
          placeholder="Search"
        />
        <Button
          text="Search"
          type="submit"
        />
      </SearchGroup>
      <Table />
      <ResultsTable />
    </section>
  );
}
