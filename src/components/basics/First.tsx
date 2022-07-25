type FirstProps = {
  title?: String,
  score: Number
}

export default function First(props: FirstProps) {

  const status = props.score >= 6 ? 'Aprovado' : 'Reprovado'

  return (
    <div>
      <p>
        {props.title}
      </p>
      <p>
        {status}
      </p>
    </div>
  )
}