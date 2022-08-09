import Me from '@components/basics/Me';
// import Card from '../../components/layout/Card/Card';
import { HomeContainer } from './styles';


export default function Honme() {
  return(
    <HomeContainer>
      {/* <Card title="meu card" color="var(--tertiary)" > */}
        <Me title="Olá, meu nome é Victor Elias" />
      {/* </Card> */}
    </HomeContainer>
  )
}