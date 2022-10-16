import { MyName } from './styles';
import photo from '@assets/jpg/eu.jpg'

type FirstProps = {
  title: string,
  // max: number,
  // min: number
}

export default function Me(props: FirstProps) {

  // const status = props.score >= 6 ? 'Aprovado' : 'Reprovado'


  // function getRandomArbitrary(min: number, max: number) {
  //   const randomNumber = Math.random() * (max - min) + min;
  //   const roundRandomNumber = Math.round(randomNumber)
    
  //   return roundRandomNumber
  // }
  

  return (
    <MyName>
      <div>
        { props.title }
      </div>
      <img src={photo} alt="" />
    </MyName>
  )
}