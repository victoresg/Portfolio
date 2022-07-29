import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer'
import { GlobalStyle } from "./styles/global";
import Content from './components/layout/Content';

export function App() {
  return (
    <>
      <Header />
      <Content />
      <GlobalStyle />
      <Footer />
    </>
  )
}
