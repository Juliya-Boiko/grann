import { createGlobalStyle } from "styled-components";
import MonicaFontWoff from '../fonts/Moniqa-BlackCondensedDisplay.woff';
import JeffScriptWoff from '../fonts/Jeff-Script-Regular.woff';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Moniqa';
    src: local('Moniqa'),
    url(${MonicaFontWoff}) format('woff');
    font-weight: 900;
  }

  @font-face {
    font-family: 'Jeff';
    src: local('Jeff'),
    url(${JeffScriptWoff}) format('woff');
    font-weight: 400;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: #705A66;
    background-color: #F5F7F8;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  p {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  img {
    display: block;
  }
`;
