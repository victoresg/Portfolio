import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #434343;
    --secondary: #000;
    --tertiary: #00FA9A;
  }
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: 0 !important;
  }
  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  // Generals
  body {
    margin: 0;
    font-family: $font-family-base;
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
    background-color: var(--secondary);
  }
`;

export {
  GlobalStyle
}
