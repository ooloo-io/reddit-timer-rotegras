import React from 'react';
import HeatMap from '../../components/HeatMap/HeatMap';
import Headline from '../../components/Headline/Headline';
import Page from '../../components/Page';
import RedditTopic from '../../components/RedditTopic';
import InfoSection from '../../components/InfoSection/InfoSection';
import config from '../../config';
import StyledSubline from './Home.styles';
import Button from '../../components/Button/Button';


export default function Home() {
  return (
    <Page>
      <Headline>
        No reactions to your reddit posts?
      </Headline>

      <StyledSubline>
        Great timing, great results! Find the best time to post on your subreddit.
      </StyledSubline>

      <Button
        path={`/search/${config.defaultReddit}`}
        text="SHOW ME THE BEST TIME"
      />

      <RedditTopic />

      <HeatMap />

      <InfoSection />

    </Page>
  );
}
