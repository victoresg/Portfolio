import Me from '@components/basics/Me';
import { HomeContainer, HomeCards } from './styles';
import Card from '@components/layout/Card/Card';

import reactLogo from '@assets/png/React-icon.png'
import vueLogo from '@assets/png/Vue-icon.png'
import linkedin from '@assets/png/linkedin.png'
import twitter from '@assets/png/twitter.png'

export default function Home() {
  const apresentationText = `
  <br>
  <h4>Meu nome é Victor Elias e sou Desenvolvedor Web.</h4>
  <br>
  <p>Nos últimos anos na área de desenvolvimento tenho trabalhado com os frameworks Vue JS e React JS, desenvolvendo sites e funcionalidades 
  dentro dessas tecnologias. Venho ganhando espaço no mercado de trabalho, sempre empolgado para aprender coisas novas.</p>
  `

  return(
    <HomeContainer>
      <Card title="Olá" color="var(--primary)" >
        <Me title={apresentationText} />
      </Card>

      <HomeCards>
        <div>
          <img src={linkedin} width="100" alt="" />
        </div>
        <div>
          <img src={twitter} width="100" alt="" />
        </div>
      </HomeCards>
    </HomeContainer>
  )
}