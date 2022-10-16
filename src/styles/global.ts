import { createGlobalStyle } from "styled-components";
import circuit from "@assets/png/o-circuito.png";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #000;
    --secondary: #000;
    --tertiary: #00FA9A;
    --quartinary: #00fa9aa6;
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
  /* html {
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
  } */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

  h2 {
    font-size: 30px;
  }

  h4 {
    font-size: 25px;
  }

  h6 {
    font-size: 20px;
  }

  p {
    font-size: 18px;
  }
`;

export { GlobalStyle };
