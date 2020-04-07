import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import Button from '../components/Button';
import HeatMap from '../components/HeatMap/HeatMap';
import Page from '../components/Page';
import RedditTopic from '../components/RedditTopic';
import Info from '../components/Info';
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

const StyledText = Styled.div`
  line-height: 1.69;
  margin: 0;
`;

const StyledP = Styled.p`
  margin: 0;
`;

const StyledP2 = Styled.p`
  margin: 0;
  line-height: 1.70;
  letter-spacing: 0.03px;

  &:first-child {
    margin-top: 15px;
  }
`;

const StyledA = Styled.a`
  letter-spacing: -.1px
  margin-left: -.5px;
  margin-right: -5px;
`;

const StyledA2 = Styled.a`
  letter-spacing: .06px;
  margin-left: 4px;
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

      <Info title="How it works">
        <StyledText>
          <StyledP>
            • We find the 500 top posts from the past year for a subreddit.
          </StyledP>
          <StyledP>
            • The data is visualized in a heatmap grouped by weekday and hour of the day.
          </StyledP>
          <StyledP>
            • See immediately when to submit your reddit post.
          </StyledP>
        </StyledText>
      </Info>

      <Info title="About">
        <StyledText>
          <StyledP2>
            This app was created during a course on&nbsp;
            <StyledA href="https://www.ooloo.io">
              ooloo.io
            </StyledA>
            &nbsp; with the goal to implement a pixel-perfect
          </StyledP2>
          <StyledP2>
            real-world application with professional workflows and tools like Kanban, Asana, Zeplin,
          </StyledP2>
          <StyledP2>
            GitHub, pull requests and code reviews.
            <StyledA2 href="https://www.ooloo.io">
              Click here for more information.
            </StyledA2>
          </StyledP2>
        </StyledText>
      </Info>
    </Page>
  );
}
