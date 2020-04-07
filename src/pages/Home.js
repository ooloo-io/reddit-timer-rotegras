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


const infoContent = [
  {
    title: 'How it works',
    text: [
      '• We find the 500 top posts from the past year for a subreddit.',
      '• The data is visualized in a heatmap grouped by weekday and hour of the day.',
      '• See immediately when to submit your reddit post.',
    ],
  },
  {
    title: 'About',
    text: [
      'This app was created during a course on & nbsp;'
      + '<a href = "https://www.ooloo.io" target = "_blank" rel ="noopener no-referrer">'
      + 'ooloo.io</a>&nbsp; with the goal to implement '
      + 'a pixel-perfect real-world application with professional '
      + 'workflows and tools like Kanban, Asana, Zeplin, GitHub, pull '
      + 'requests and code reviews. &nbsp; '
      + '<a href="https://www.ooloo.io/employers"target="_blank" rel="noopener no-referrer">'
      + 'Click here for more information.</a>',
    ],
  },
];

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

      <Info
        title={infoContent[0].title}
        text={infoContent[0].text}
      />

      <Info
        title={infoContent[1].title}
        text={infoContent[1].text}
      />
    </Page>
  );
}
