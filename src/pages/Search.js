import React from 'react';
import Page from '../components/Page';
import HeatMap from '../components/HeatMap/HeatMap';
import ResultsTable from '../components/ResultsTable';
import InputForm from '../components/InputForm/InputForm';
import Headline from '../components/Headline/Headline';


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
