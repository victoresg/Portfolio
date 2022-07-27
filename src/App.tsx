import { Header } from './components/basics/Header';
import { GlobalStyle } from "./styles/global";
import Routes from "./Routes";

export function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  )
}
