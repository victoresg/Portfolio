import { Container } from './styles'

type CardProps = {
  title?: string,
  children: JSX.Element | JSX.Element[],
  color: string
}

export default function Card(props: CardProps) {
  return (
	<Container color={props.color}>
		<h2>{ props.title }</h2>
    <div>
      { props.children }
    </div>
	</Container>
  )
}