import { Header } from '../../components/header';
import MyName from '../../components/my-name'

import { HomeContainer } from './styles';


export default () => (
  <HomeContainer>
    <Header/>
    <MyName title="Olá, meu nome é Victor Elias" score={9}/>
  </HomeContainer>
)