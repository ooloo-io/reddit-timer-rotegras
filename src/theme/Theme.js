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
    grayDarker: '#787878',
    buttonBg: '#fdb755',
    link: '#0087ff',
    transparent: 'transparent',
    backgroundDark: '#1e2537',
    borderDark: '#1e2537',
    backgroundBottom: '#e9e9e9',
    backgroundTop: '#fefefe',
  },
  heatMapColors: {
    color0: '#e0e592',
    color1: '#aed396',
    color2: '#a9d194',
    color3: '#a0ce93',
    color4: '#99cd94',
    color5: '#8cc894',
    color6: '#5eb391',
    color7: '#5db492',
    color8: '#5cb391',
    color9: '#5aad8c',
    color10: '#3984a3',
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
