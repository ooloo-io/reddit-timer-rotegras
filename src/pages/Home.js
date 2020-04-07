import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import Button from '../components/Button';
import HeatMap from '../components/HeatMap/HeatMap';
import Page from '../components/Page';
import RedditTopic from '../components/RedditTopic';
import config from '../config';


const StyledHeadline = Styled.h1`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin: 30px auto 10px;
`;

const StyledSubline = Styled.p`
  text-align: center;
  margin: 10.5px auto 45px;
`;


export default function Home() {
  return (
    <Page>
      <StyledHeadline>
        No reactions to your reddit posts?
      </StyledHeadline>

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
