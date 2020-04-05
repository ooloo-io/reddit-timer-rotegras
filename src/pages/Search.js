import React from 'react';
import Styled from 'styled-components';
import Button from '../components/Button';
import Table from '../components/Table';
import ResultsTable from '../components/ResultsTable';

const SearchGroup = Styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 22px;
`;

const Input = Styled.input`
  display: flex;
  flex-direction: row;
  height: 322x;
  width: 355px;
  font-size: 14px;
  padding-left: 15px;
  margin: 0 10px 0 28px;
  border-radius: 2px;
  border: solid 1px #e6e6e6;
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
