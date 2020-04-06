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
  }

  body {
    overflow-y: scroll;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font: 400 38px/1 Bitter, serif;
    color: ${({ theme }) => theme.colors.black};
    margin: 10px;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: #93918f;
    margin: 15px auto 45px;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
