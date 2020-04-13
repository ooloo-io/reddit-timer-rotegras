import Styled from 'styled-components';


const StyledLink = Styled.a`
  letter-spacing: -.1px
  margin-left: -.5px;
  margin-right: -5px;
`;

const StyledLink2 = Styled.a`
  letter-spacing: .06px;
  margin-left: 4px;
`;

const StyledParagraph = Styled.p`
  margin: 0;
`;

const StyledParagraph2 = Styled.p`
  margin: 0;
  line-height: 1.70;
  letter-spacing: 0.03px;

  &:first-child {
    margin-top: 15px;
  }
`;

const StyledText = Styled.div`
  line-height: 1.69;
  margin: 0;
`;


export {
  StyledLink,
  StyledLink2,
  StyledText,
  StyledParagraph,
  StyledParagraph2,
};
