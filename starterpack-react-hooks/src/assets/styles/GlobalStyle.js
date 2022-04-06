import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *{
    margin: 0;
    text-decoration: none;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
