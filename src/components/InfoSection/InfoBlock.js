import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledBlock = Styled.section`
  width: 758px;
  margin: 55px auto 19px;
  padding: 0 0 0 10px;
  text-align: left;
  border: 1px solid transparent;

  &:last-child {
    margin-bottom: 98px;
  }
`;

const StyledTitle = Styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.textsize.medium};
  font-weight: 400;
  margin: 30px auto 12px 1px;
`;


export default function InfoBlock({ title, children }) {
  return (
    <StyledBlock>
      <StyledTitle>
        {title}
      </StyledTitle>
      {children}
    </StyledBlock>
  );
}

InfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
