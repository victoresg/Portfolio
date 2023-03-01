import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer'
import { GlobalStyle } from "./styles/global";
import Routes from './Routes';

export function App() {
  return (
    <div>
      <Header />
      <Routes />
      <GlobalStyle />
      <Footer />
    </div>
  )
}
