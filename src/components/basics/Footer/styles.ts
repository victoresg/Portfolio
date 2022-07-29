import styled from "styled-components";
import { flexAlignStart, flexAlignCenter } from '../../../styles/mixins/flexAlign'


const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: var(--primary);
  height: 20rem;
  width: 100%;
  padding: 2rem 15rem;
  @media(max-width: 768px) {
    padding: 0;
  }
  h1 {
    text-align: center;
  }
  img {
    width: 100px;
    transition: all 0.3s;
    margin: 15px 0;
    &:hover {
      transform: scale(1.1);
    }
  }
`
const LogoContainer = styled.div`
  width: 50%;
  ${flexAlignCenter}
  flex-direction: column;
`
const ListContainer = styled.div`
  width: 50%;
  ${flexAlignCenter}
`

export {
  Container,
  LogoContainer,
  ListContainer
};