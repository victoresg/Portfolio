import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App'
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <GlobalStyle />
      <App />
    </div>
  </React.StrictMode>
)
