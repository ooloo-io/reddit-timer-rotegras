import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    grayLight: '#e6e6e6',
    grayMedium: '#93918f',
    grayDark: '#636363',
    buttonBg: '#fdb755',
    link: '#0087ff',
  },
  fonts: {
    primary: 'Montserrat',
    secondary: 'Bitter',
  },
  textsize: {
    big: '38px',
    medium: '24px',
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
    padding: '100px 0',
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
