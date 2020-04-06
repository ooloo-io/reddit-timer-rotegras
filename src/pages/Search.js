import React from 'react';
import Styled from 'styled-components';
import Button from '../components/Button';
import Page from '../components/Page';
import HeatMap from '../components/HeatMap/HeatMap';
import ResultsTable from '../components/ResultsTable';

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
`;

export default function Search() {
  return (
    <Page>
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
      <HeatMap />
      <ResultsTable />
    </Page>
  );
}
