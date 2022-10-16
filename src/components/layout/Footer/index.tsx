import { Container, LogoContainer, ListContainer } from './styles';
import reactLogo from '@assets/png/React-icon.png'
import vueLogo from '@assets/png/Vue-icon.png'
import linkedin from '@assets/png/linkedin.png'
import twitter from '@assets/png/twitter.png'

export function Footer() {
  return (
    <Container>
      <LogoContainer>
        <h3>My favorite Frameworks JS</h3>
        <div>
          <img src={reactLogo} alt="" />
          <img src={vueLogo} alt="" />
        </div>
      </LogoContainer>
      <ListContainer>
        <div>
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <img src={linkedin} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
          </ul>
        </div>
      </ListContainer>
    </Container>
  )
}