import First from '../../components/basics/First'
import Second from '../../components/basics/Second'

export default function Home() {
  return (
    <div>
      <First title="com parâmetro" score={9}/>
      <Second />
    </div>
  )
}