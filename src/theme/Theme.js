import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    greyLight: '#e6e6e6',
    greyDark: '#636363',
    buttonBg: '#fdb755',
  },
  textsize: {
    big: '38px',
    body: '16px',
    small: '14px',
    smaller: '13px',
  },
  pageContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '122px 0 100px 0',
    textAlign: 'center',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
