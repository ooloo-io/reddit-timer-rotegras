import React from 'react';
import Page from '../../components/Page';
import HeatMap from '../../components/HeatMap';
import ResultsTable from '../../components/ResultsTable';
import InputForm from '../../components/InputForm';
import Headline from '../../components/Headline';


export default function Search() {
  return (
    <Page>
      <Headline>
        Find the best time for a subreddit
      </Headline>

      <InputForm />

      <HeatMap />

      <ResultsTable />
    </Page>
  );
}
