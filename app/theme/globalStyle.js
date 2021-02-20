import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';
import { primaryFont } from './typography';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    background-color: ${theme('colors.background')};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${primaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
