import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 16px;
    height: 100%;
  }

  html,
  body {
    height: 100%;
  }

  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  h1 {
    font: 400 38px/1 Bitter, serif;
    color: #000;
    margin: 20px;
    padding-top: 17px;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: #93918f;
    margin: 20px;
  }
`;

export default GlobalStyle;
