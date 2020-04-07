import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.colors.greyMedium};
  }

  body {
    overflow-y: scroll;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3 ,h4, h5, h6 {
    font-family: Bitter, serif;
    font-weight: 400;
  }

  h1 {
    font-size: ${({ theme }) => theme.textsize.big};
    color: ${({ theme }) => theme.colors.black};
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
