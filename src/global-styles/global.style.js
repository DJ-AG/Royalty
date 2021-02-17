import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
    box-sizing: border-box;
  } 
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
body {  
    position: relative;
    margin: 0;
    padding-bottom: 6rem;
    min-height: 100%;
    font-family: 'Open Sans Condensed', sans-serif; 
}
a{
    text-decoration: none;
    color: black;
}
`;
