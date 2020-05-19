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
  heatmap: {
    width: '1115px',
    headerHeight: '54px',
    headerLabelWidth: '80px',
    dayLabelWidth: '154px',
    cellWidth: '40px',
    cellHeight: '40px',
    colors: {
      0: '#e0e592',
      1: '#aed396',
      2: '#a9d194',
      3: '#a0ce93',
      4: '#99cd94',
      5: '#8cc894',
      6: '#5eb391',
      7: '#5db492',
      8: '#5cb391',
      9: '#5aad8c',
      10: '#3984a3',
    },
  },
  postTable: {
    width: '786px',
    rowHeight: '34px',
    cellWidth: {
      title: '373px',
      time: '114px',
      score: '64px',
      comments: '104px',
      author: '129px',
    },
    padding: {
      tableCell: '9px 10px 10px 12px',
    },
    textColor: '#000000',
    linkColor: '#0087ff',
    borderColor: '#dddddd',
  },
};


const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);


Theme.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Theme;
