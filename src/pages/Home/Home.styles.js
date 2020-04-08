import Styled from 'styled-components';


const ButtonWrapper = Styled.div`
  width: 217px;
  height: 36px;
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

const StyledSubline = Styled.p`
  text-align: center;
  margin: 10.5px auto 45px;
`;

const StyledText = Styled.div`
  line-height: 1.69;
  margin: 0;
`;


export {
  StyledA,
  StyledA2,
  StyledSubline,
  StyledText,
  StyledP,
  StyledP2,
  ButtonWrapper,
};
