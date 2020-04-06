import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import HeatMap from '../components/HeatMap/HeatMap';
import Page from '../components/Page';
import TextField from '../components/TextField';
import RedditTopic from '../components/RedditTopic';


export default function Home() {
  return (
    <Page>
      <TextField
        align="center"
        elem="h1"
        mt="30"
        mb="10"
      >
        No reactions to your reddit posts?
      </TextField>
      <TextField
        align="center"
        elem="p"
        mt="10.5"
        mb="45"
      >
        Great timing, great results! Find the best time to post on your subreddit.
      </TextField>
      <Link to="/search/javascript">
        <Button
          text="SHOW ME THE BEST TIME"
        />
      </Link>
      <RedditTopic />
      <HeatMap />
    </Page>
  );
}
