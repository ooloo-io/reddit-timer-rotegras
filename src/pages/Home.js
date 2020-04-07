import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import HeatMap from '../components/HeatMap/HeatMap';
import Page from '../components/Page';
import RedditTopic from '../components/RedditTopic';
import {
  StyledHeadline,
  StyledInfo,
  StyledLink,
  StyledParagraph,
  StyledSubline,
  StyledTitle,
  StyledText,
} from './Home_styles';
import config from '../config';


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

      <StyledInfo>
        <StyledTitle>
          How it works
        </StyledTitle>

        <StyledParagraph>
          <StyledText>
            • We find the 500 top posts from the past year for a subreddit.
          </StyledText>
          <StyledText>
            • The data is visualized in a heatmap grouped by weekday and hour of the day.
          </StyledText>
          <StyledText>
            • See immediately when to submit your reddit post.
          </StyledText>
        </StyledParagraph>
      </StyledInfo>

      <StyledInfo>
        <StyledTitle>
          About
        </StyledTitle>

        <StyledParagraph>
          <StyledText>
            This app was created during a course on &nbsp;
            <StyledLink
              as="a"
              href="https://www.ooloo.io"
              target="_blank"
              rel="noopener no-referrer"
            >
              ooloo.io
            </StyledLink>
              &nbsp; with the goal to implement a pixel-perfect
          </StyledText>
          <StyledText>
            real-world application
            with professional workflows and tools like Kanban, Asana, Zeplin,
          </StyledText>
          <StyledText>
            GitHub, pull requests and code reviews. &nbsp;
            <StyledLink
              as="a"
              href="https://www.ooloo.io/employers"
              target="_blank"
              rel="noopener no-referrer"
            >
              Click here for more information.
            </StyledLink>
          </StyledText>
        </StyledParagraph>
      </StyledInfo>

    </Page>
  );
}
