import React from 'react';
import Button from '../components/Button';
import Page from '../theme/Page';
import Table from '../components/Table';


export default function Home() {
  return (
    <Page>
      <h1>
        No reactions to your reddit posts?
      </h1>
      <div className="subtitle">
        Great timing, great results! Find the best time to post on your subreddit.
      </div>
      <Button
        text="SHOW ME THE BEST TIME"
      />
      <Table />
    </Page>
  );
}
