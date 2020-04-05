import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 16px;
    overflow-y: scroll;
  }

  html,
  body {
    min-height: 100vh;
  }

  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding-top: 22px;
  }

  h1 {
    font: 400 38px/1 Bitter, serif;
    color: #000;
    margin: 10px;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: #93918f;
    margin: 15px auto 45px;
  }
`;

export default GlobalStyle;
