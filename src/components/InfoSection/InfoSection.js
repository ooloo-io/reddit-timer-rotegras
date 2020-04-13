import React from 'react';
import InfoBlock from './InfoBlock';
import {
  StyledLink,
  StyledLink2,
  StyledText,
  StyledParagraph,
  StyledParagraph2,
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
          <StyledParagraph2>
            This app was created during a course on&nbsp;
            <StyledLink href="https://www.ooloo.io">
              ooloo.io
            </StyledLink>
            &nbsp; with the goal to implement a pixel-perfect
          </StyledParagraph2>
          <StyledParagraph2>
            real-world application with professional workflows and tools like Kanban, Asana, Zeplin,
          </StyledParagraph2>
          <StyledParagraph2>
            GitHub, pull requests and code reviews.
            <StyledLink2 href="https://www.ooloo.io">
              Click here for more information.
            </StyledLink2>
          </StyledParagraph2>
        </StyledText>
      </InfoBlock>
    </>
  );
}
