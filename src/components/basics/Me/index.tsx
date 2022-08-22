import { MyName } from './styles';
import parse, { Element } from 'html-react-parser';
import photo from '@assets/jpg/eu.jpg'

type FirstProps = {
  title: string,
  // max: number,
  // min: number
}

const parser = (input: string) =>
  parse(input, {
    replace: domNode => {
      if (domNode instanceof Element && domNode.attribs.class === 'remove') {
        return <></>;
      }
    }
  });

export default function Me(props: FirstProps) {

  // const status = props.score >= 6 ? 'Aprovado' : 'Reprovado'


  // function getRandomArbitrary(min: number, max: number) {
  //   const randomNumber = Math.random() * (max - min) + min;
  //   const roundRandomNumber = Math.round(randomNumber)
    
  //   return roundRandomNumber
  // }
  

  return (
    <MyName>
      <h2>
        { parser(props.title) }
      </h2>
      <img src={photo} alt="" />
    </MyName>
  )
}