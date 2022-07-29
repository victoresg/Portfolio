import { Container, LogoContainer, ListContainer } from './styles';
import reactLogo from '../../../assets/png/React-icon.png'
import vueLogo from '../../../assets/png/Vue-icon.png'

export function Footer() {
  return (
    <Container>
      <LogoContainer>
        <p>My favorite Frameworks JS</p>
        <div>
          <img src={reactLogo} alt="" />
          <img src={vueLogo} alt="" />
        </div>
      </LogoContainer>
      <ListContainer>
        sas
      </ListContainer>
    </Container>
  )
}