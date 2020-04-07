import React from 'react';
import Styled from 'styled-components';

const StyledTopic = Styled.div`
  font-weight: 400;
  // color: ${({ theme }) => theme.colors.greyMedium};
  margin: 48px auto 37px auto;
  padding-left: 1px;
`;


export default function RedditTopic() {
  return (
    <StyledTopic>
      r/javascript
    </StyledTopic>
  );
}
