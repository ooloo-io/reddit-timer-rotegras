import React from 'react';
import Button from '../../components/Button';
import HeatMap from '../../components/HeatMap/HeatMap';
import Headline from '../../components/Headline';
import Page from '../../components/Page';
import RedditTopic from '../../components/RedditTopic';
import InfoSection from '../../components/InfoSection/InfoSection';
import config from '../../config';
import {
  StyledSubline,
  ButtonWrapper,
} from './Home.styles';

export default function Home() {
  return (
    <Page>
      <Headline>
        No reactions to your reddit posts?
      </Headline>

      <StyledSubline>
        Great timing, great results! Find the best time to post on your subreddit.
      </StyledSubline>

      <ButtonWrapper>
        <Button
          path={`/search/${config.defaultReddit}`}
          text="SHOW ME THE BEST TIME"
        />

      </ButtonWrapper>

      <RedditTopic />

      <HeatMap />

      <InfoSection />

    </Page>
  );
}
