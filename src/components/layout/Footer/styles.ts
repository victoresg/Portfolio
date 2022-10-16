import styled from "styled-components";
import { flexAlignCenter } from '../../../styles/mixins/flexAlign'

const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--primary);
  gap: 24px;
  border-top: 1px solid var(--quartinary);
  padding: 30px 0;
  @media(max-width: 768px) {
    ${flexAlignCenter}
    flex-direction: column;
  }
  h1 {
    text-align: center;
  }
  h3 {
    color: var(--tertiary);
  }
  img {
    width: 40px;
    transition: all 0.3s;
    margin: 15px 0;
    &:hover {
      transform: scale(1.1);
    }
  }
`
const LogoContainer = styled.div`
  ${flexAlignCenter}
  border-right: 3px solid var(--quartinary);
  @media(max-width: 768px) {
    border-right: none;
    border-bottom: 2px solid var(--tertiary);
  }
  flex-direction: column;
  div {
    margin-top: 15px;
    img {
      margin: 5px 5px;
    }
  }
`
const ListContainer = styled.div`
  ${flexAlignCenter}
  flex-direction: column;
  border-left: 3px solid var(--quartinary);
  @media(max-width: 768px) {
    border: none;
  }

  ul {
    ${flexAlignCenter}
    list-style: none;
    li {
      margin: 0 10px;
      img {
        cursor: pointer;
        width: 40px;
      }
    }
  }
`

export {
  Container,
  LogoContainer,
  ListContainer
};