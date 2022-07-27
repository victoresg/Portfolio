import { MyName } from './styles';

type FirstProps = {
  title?: string,
  max: number,
  min: number
}

export default function First(props: FirstProps) {

  // const status = props.score >= 6 ? 'Aprovado' : 'Reprovado'


  function getRandomArbitrary(min: number, max: number) {
    const randomNumber = Math.random() * (max - min) + min;
    const roundRandomNumber = Math.round(randomNumber)
    
    return roundRandomNumber
  }

  return (
    <MyName>
      <h1>
        { props.title }
      </h1>
      <p>
        { getRandomArbitrary(props.min, props.max) }
      </p>
    </MyName>
  )
}