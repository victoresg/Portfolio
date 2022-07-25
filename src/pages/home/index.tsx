import First from '../../components/basics/apresentation'
import Second from '../../components/basics/Second'

import { HomeContainer } from './styles';


export default () => (
  <HomeContainer>
    <First title="Olá, meu nome é Victor Elias" score={9}/>
    <Second />
  </HomeContainer>
)