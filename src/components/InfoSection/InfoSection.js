import React from 'react';
import InfoBlock from './InfoBlock';
import { Text, Paragraph } from './InfoSection.styles';


export default function InfoSection() {
  return (
    <>
      <InfoBlock title="How it works">
        <Text>
          <Paragraph>
            • We find the 500 top posts from the past year for a subreddit.
          </Paragraph>
          <Paragraph>
            • The data is visualized in a heatmap grouped by weekday and hour of the day.
          </Paragraph>
          <Paragraph>
            • See immediately when to submit your reddit post.
          </Paragraph>
        </Text>
      </InfoBlock>

      <InfoBlock title="About">
        <Text>
          <Paragraph>
            This app was created during a course on
            {' '}
            <a href="https://www.ooloo.io">
              ooloo.io
            </a>
            {' '}
            with the goal to implement a pixel-perfect
          </Paragraph>
          <Paragraph>
            real-world application with professional workflows and tools like Kanban, Asana, Zeplin,
          </Paragraph>
          <Paragraph>
            GitHub, pull requests and code reviews.&nbsp;
            <a href="https://www.ooloo.io">
              Click here for more information.
            </a>
          </Paragraph>
        </Text>
      </InfoBlock>
    </>
  );
}
