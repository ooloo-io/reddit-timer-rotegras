import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 16px;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  .page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    position: relative;
    min-height: 100vh;
    padding: 22px 0 100px;
    box-sizing: border-box;
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

  a {
    font-weight: 400;
    text-decoration: none;
  }
`;

export default GlobalStyle;
