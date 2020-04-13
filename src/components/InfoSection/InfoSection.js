import React from 'react';
import InfoBlock from './InfoBlock';
import {
  StyledText,
  StyledParagraph,
} from './InfoSection.styles';


export default function InfoSection() {
  return (
    <>
      <InfoBlock title="How it works">
        <StyledText>
          <StyledParagraph>
            • We find the 500 top posts from the past year for a subreddit.
          </StyledParagraph>
          <StyledParagraph>
            • The data is visualized in a heatmap grouped by weekday and hour of the day.
          </StyledParagraph>
          <StyledParagraph>
            • See immediately when to submit your reddit post.
          </StyledParagraph>
        </StyledText>
      </InfoBlock>

      <InfoBlock title="About">
        <StyledText>
          <StyledParagraph>
            This app was created during a course on{' '}
            <a href="https://www.ooloo.io">
              ooloo.io
            </a>
            {' '}with the goal to implement a pixel-perfect
          </StyledParagraph>
          <StyledParagraph>
            real-world application with professional workflows and tools like Kanban, Asana, Zeplin,
          </StyledParagraph>
          <StyledParagraph>
            GitHub, pull requests and code reviews.&nbsp;
            <a href="https://www.ooloo.io">
              Click here for more information.
            </a>
          </StyledParagraph>
        </StyledText>
      </InfoBlock>
    </>
  );
}
