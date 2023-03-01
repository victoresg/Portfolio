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
  <p>
    Nos últimos anos tenho trabalhado principalmente com os frameworks Vue JS e React JS, desenvolvendo websites e funcionalidades dentro destas tecnologias.

    Posso dizer que venho me aperfeiçoando dentro do mercado de T.I, aprendendo novas ferramentas e novos conceitos para que eu possa cada vez mais me destacar dentro do mesmo, 
    buscar maneiras modernas em resolver desafios e satisfazer as necessidades dos usuários é algo que tenho prazer, meu trabalho é modernizar métodos e pensar no futuro.
  </p>
  `

  return(
    <HomeContainer>
      <Card title="Olá" color="var(--primary)" >
        <Me title={apresentationText} />
      </Card>
    </HomeContainer>
  )
}