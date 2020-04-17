import React from 'react';
import InfoBlock from './InfoBlock';
import { TextWrapper, ParagraphWrapper } from './InfoSection.styles';


export default function InfoSection() {
  return (
    <>
      <InfoBlock title="How it works">
        <TextWrapper>
          <ParagraphWrapper>
            • We find the 500 top posts from the past year for a subreddit.
          </ParagraphWrapper>
          <ParagraphWrapper>
            • The data is visualized in a heatmap grouped by weekday and hour of the day.
          </ParagraphWrapper>
          <ParagraphWrapper>
            • See immediately when to submit your reddit post.
          </ParagraphWrapper>
        </TextWrapper>
      </InfoBlock>

      <InfoBlock title="About">
        <TextWrapper>
          <ParagraphWrapper>
            This app was created during a course on
            {' '}
            <a href="https://www.ooloo.io">
              ooloo.io
            </a>
            {' '}
            with the goal to implement a pixel-perfect
          </ParagraphWrapper>
          <ParagraphWrapper>
            real-world application with professional workflows and tools like Kanban, Asana, Zeplin,
          </ParagraphWrapper>
          <ParagraphWrapper>
            GitHub, pull requests and code reviews.&nbsp;
            <a href="https://www.ooloo.io">
              Click here for more information.
            </a>
          </ParagraphWrapper>
        </TextWrapper>
      </InfoBlock>
    </>
  );
}
