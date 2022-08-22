import Me from '@components/basics/Me';
// import Card from '../../components/layout/Card/Card';
import { HomeContainer } from './styles';
import Card from '@components/layout/Card/Card';

export default function Home() {
  const apresentationText = 'Meu nome é Victor Elias, sou <br> Desenvolvedor Web...'

  return(
    <HomeContainer>
      <Card title="Olá" color="var(--primary)" >
        <Me title={apresentationText} />
      </Card>
    </HomeContainer>
  )
}