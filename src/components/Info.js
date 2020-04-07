import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledInfo = Styled.section`
  width: 738px;
  margin: 55px auto 20px;
  padding-right: 0p;
  text-align: left;

  &:last-child {
    margin-bottom: 100px;
  }
`;

const StyledTitle = Styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.textsize.medium};
  font-weight: 400;
  margin-bottom: 14px;
  margin: 30px auto 14px 1px;
`;

const StyledText = Styled.p`
  line-height: 1.69;
  margin: 0;
`;


export default function Info({ title, text }) {
  return (
    <StyledInfo>
      <StyledTitle>
        {title}
      </StyledTitle>

      {text.map((item) => <StyledText>{item}</StyledText>)}

    </StyledInfo>
  );
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};
