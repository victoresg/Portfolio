import styled from "styled-components";
import { flexAlignCenter } from '../../styles/mixins/flexAlign'


const HomeContainer = styled.div`
  /* min-height: calc(100vh - 220px); */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
`

const HomeCards = styled.section`
  display: flex;
  width: 100%;
  height: max-content;
  flex-wrap: wrap;
  div {
    ${flexAlignCenter}
    margin: 15px;
    max-width: 200px;
    min-width: 200px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 30px 50px;
    border-radius: 8px;
  }
`

export {
  HomeContainer,
  HomeCards
}