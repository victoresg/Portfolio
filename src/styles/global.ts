import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #f5f9fc;
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
    background-color: var(--primary);
  }
  #__nuxt {
    overflow-x: hidden;
  }
  [tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  // Typography
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
  p, ul {
    line-height: 1.5;
    margin-top: 0;
  }

  //font size default
  p {
    font-size: 14px;
  }

  // Abbreviations
  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
    text-decoration-skip-ink: none;
  }
  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }
  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }
  dd {
    margin-bottom: .5rem;
    margin-left: 0;
  }
  blockquote {
    margin: 0 0 1rem;
  }
  sub,
  sup {
    position: relative;
    line-height: 0;
    vertical-align: baseline;
  }
  sub { bottom: -.25em; }
  sup { top: -.5em; }

  // Links
  a {
    background-color: transparent;
    font-size: 14px;
    text-decoration: none;
    &:focus {
      color: inherit;
    }
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;

    &:focus {
      outline: 0;
    }
  }

  // Figure
  figure {
    margin: 0 0 1rem;
  }

  // Images
  img {
    vertical-align: middle;
    border-style: none;
  }
  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  // Table
  table {
    border-collapse: collapse;
  }
  caption {
    text-align: left;
    caption-side: bottom;
  }
  th {
    text-align: inherit;
  }

  // Form
  label {
    display: inline-block;
  }
  button {
    border-radius: 0;
  }
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    line-height: inherit;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  select {
    word-wrap: normal;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  input[type="radio"],
  input[type="checkbox"] {
    -webkit-appearance: none;
    box-sizing: border-box;
    padding: 0;
  }
  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }
  textarea {
    overflow: auto;
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  // Correct elements display
  output {
    display: inline-block;
  }
  summary {
    display: list-item;
    cursor: pointer;
  }
  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  // Transition
  .page-enter,
  .page-leave-active {
    opacity: 0
  }
  .fade-enter-active {
    animation: fade-in .4s;
  }
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

`;

export {
  GlobalStyle
}
