import { Container } from './styles';

type ContentProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Content(props: ContentProps) {
  return (
    <Container>
      { props.children }
    </Container>
  )
}