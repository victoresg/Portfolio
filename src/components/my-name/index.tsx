import { MyName } from './styles';

type FirstProps = {
  title?: String,
  score: Number
}

export default function First(props: FirstProps) {

  const status = props.score >= 6 ? 'Aprovado' : 'Reprovado'

  return (
    <MyName>
      <h1>
        {props.title}
      </h1>
      <p>
        {status}
      </p>
    </MyName>
  )
}