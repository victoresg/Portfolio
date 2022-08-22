import { createGlobalStyle } from "styled-components";
import circuit from '@assets/png/o-circuito.png'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #000;
    --secondary: #000;
    --tertiary: #00FA9A;
    --quartinary: #00fa9a4d;
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
    position: relative;
    margin: 0;
    font-family: $font-family-base;
    padding-top: env(safe-area-inset-top);
    background-color: var(--secondary);
    ::before {
      content: "";
      position: fixed;
      opacity: 0.1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      background-image: url(${circuit}) !important;
      background-position: center;
    }
  }
`;

export {
  GlobalStyle
}
