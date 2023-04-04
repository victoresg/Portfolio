import { HomeContainer, HomeCards } from './styles';
import ReactPlayer from 'react-player'

export default function Home() {
  return(
    <HomeContainer>
      <ReactPlayer
        url='src/assets/mp4/intro.mp4'
        width='100%'
        height='100%'
        loop={true}
        muted={true}
        playing={true}
      />
    </HomeContainer>
  )
}