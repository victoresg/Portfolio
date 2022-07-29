import styled from "styled-components";
import { flexAlignCenter } from '../../../styles/mixins/flexAlign'

const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--primary);
  height: 15rem;
  gap: 24px;
  padding: 20px 0;
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
  ${flexAlignCenter}
  border-right: 3px solid var(--dark);
  flex-direction: column;
  div {
    margin-top: 15px;
  }
`
const ListContainer = styled.div`
  ${flexAlignCenter}
  flex-direction: column;
  border-left: 3px solid var(--dark);
  h3 {
    margin-left: 10px;
  }
  ul {
    ${flexAlignCenter}
    list-style: none;
    li {
      margin: 15px 10px;
      img {
        cursor: pointer;
        width: 80px;
      }
    }
  }
`

export {
  Container,
  LogoContainer,
  ListContainer
};