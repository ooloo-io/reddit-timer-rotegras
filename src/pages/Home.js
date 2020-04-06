import React from 'react';
import Button from '../components/Button';
import Page from '../theme/Page';
import Table from '../components/Table';
import TextField from '../components/TextField';


export default function Home() {
  return (
    <Page>
      <TextField
        align="center"
        elem="h1"
        mt="10"
        mb="10"
      >
        No reactions to your reddit posts?
      </TextField>
      <TextField
        align="center"
        elem="p"
        mt="15"
        mb="45"
      >
        Great timing, great results! Find the best time to post on your subreddit.
      </TextField>
      <Button
        text="SHOW ME THE BEST TIME"
      />
      <Table />
    </Page>
  );
}
