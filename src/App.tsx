import { Header } from './components/basics/Header';
import { Footer } from './components/basics/Footer'
import { GlobalStyle } from "./styles/global";
import Content from './components/basics/Content';

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
