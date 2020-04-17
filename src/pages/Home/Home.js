import React from 'react';
import config from '../../config';
import Button from '../../components/Button/Button';
import HeatMap from '../../components/HeatMap/HeatMap';
import Headline from '../../components/Headline/Headline';
import InfoSection from '../../components/InfoSection/InfoSection';
import Page from '../../components/Page/Page';
import RedditTopic from '../../components/RedditTopic/RedditTopic';
import SublineWrapper from './Home.styles';


export default function Home() {
  return (
    <Page>
      <Headline>
        No reactions to your reddit posts?
      </Headline>

      <SublineWrapper>
        Great timing, great results! Find the best time to post on your subreddit.
      </SublineWrapper>

      <Button to={`/search/${config.defaultReddit}`}>
        Show me the best time
      </Button>

      <RedditTopic />

      <HeatMap />

      <InfoSection />
    </Page>
  );
}
