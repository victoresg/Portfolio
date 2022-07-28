import MyName from '../../components/basics/Me'
import Card from '../../components/layout/Card/Card';
import { HomeContainer } from './styles';


export default () => (
  <HomeContainer>
    {/* <Card title="meu card" color="var(--tertiary)" > */}
      <MyName title="Olá, meu nome é Victor Elias" />
    {/* </Card> */}
  </HomeContainer>
)