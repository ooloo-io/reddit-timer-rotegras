import React from 'react';
import HeatMap from '../../components/HeatMap/HeatMap';
import Headline from '../../components/Headline/Headline';
import Page from '../../components/Page';
import RedditTopic from '../../components/RedditTopic';
import InfoSection from '../../components/InfoSection/InfoSection';
import config from '../../config';
import StyledSubline from './Home.styles';
import Button from '../../components/Button/Button.styles';


export default function Home() {
  return (
    <Page>
      <Headline>
        No reactions to your reddit posts?
      </Headline>

      <StyledSubline>
        Great timing, great results! Find the best time to post on your subreddit.
      </StyledSubline>

      <Button to={`/search/${config.defaultReddit}`}>
        Show me the best time
      </Button>

      <RedditTopic />

      <HeatMap />

      <InfoSection />

    </Page>
  );
}
