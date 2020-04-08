import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import Button from '../components/Button';
import HeatMap from '../components/HeatMap/HeatMap';
import Headline from '../components/Headline';
import Page from '../components/Page';
import RedditTopic from '../components/RedditTopic';
import config from '../config';



const StyledSubline = Styled.p`
  text-align: center;
  margin: 10.5px auto 45px;
`;


export default function Home() {
  return (
    <Page>
      <Headline>
        No reactions to your reddit posts?
      </Headline>

      <StyledSubline>
        Great timing, great results! Find the best time to post on your subreddit.
      </StyledSubline>

      <Link to={`/search/${config.defaultReddit}`}>
        <Button
          text="SHOW ME THE BEST TIME"
        />
      </Link>
      <RedditTopic />
      <HeatMap />
    </Page>
  );
}
