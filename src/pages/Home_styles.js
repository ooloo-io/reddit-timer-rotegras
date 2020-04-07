import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const StyledHeadline = Styled.h1`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin: 30px auto 10px;
`;

const StyledInfo = Styled.section`
  width: 740px;
  margin: 55px auto 20px;
  padding-right: 0p;
  text-align: left;

  &:last-child {
    margin-bottom: 100px;
  }
`;

const StyledLink = Styled(Link)`
  color: #0087ff;
  margin: 0 -1px;
`;

const StyledSubline = Styled.p`
  text-align: center;
  margin: 10.5px auto 45px;
`;

const StyledTitle = Styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.textsize.medium};
  font-weight: 400;
  margin-bottom: 14px;
  margin: 30px auto 14px 1px;;
`;

const StyledParagraph = Styled.div`
  // margin-top: 4px;
`;

const StyledText = Styled.p`
  line-height: 1.69;
  margin: 0;
  // letter-spacing: -0.02px;
`;

export {
  StyledHeadline,
  StyledInfo,
  StyledLink,
  StyledParagraph,
  StyledSubline,
  StyledText,
  StyledTitle,
};
