import React from 'react';
import config from '../../config';
import Button from '../../components/Button';
import StaticHeatMap from '../../components/HeatMap/Static';
import Headline from '../../components/Headline';
import InfoSection from '../../components/InfoSection';
import Page from '../../components/Page';
import RedditTopic from '../../components/RedditTopic';
import { Link } from 'react-router-dom';
import { Subline } from './Home.styles';


export default function Home() {
  return (
    <Page>
      <Headline>
        No reactions to your reddit posts?
      </Headline>

      <Subline>
        Great timing, great results! Find the best time to post on your subreddit.
      </Subline>

      <Button to={`/search/${config.defaultReddit}`}>
        Show me the best time
      </Button>

      <RedditTopic />

      <StaticHeatMap />

      <InfoSection />
    </Page>
  );
}
