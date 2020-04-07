import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledPage = Styled.section`
  ${({ theme }) => theme.pageContainer};
`;

export default function Page({ children }) {
  return (
    <StyledPage>
      {children}
    </StyledPage>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
