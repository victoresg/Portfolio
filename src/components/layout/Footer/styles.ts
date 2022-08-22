import styled from "styled-components";
import { flexAlignCenter } from '../../../styles/mixins/flexAlign'

const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--primary);
  height: 100%;
  gap: 24px;
  padding: 20px 0;
  @media(max-width: 768px) {
    ${flexAlignCenter}
    flex-direction: column;
  }
  h1 {
    text-align: center;
  }
  img {
    width: 100px;
    @media(max-width: 768px) {
      width: 50px;
    }
    transition: all 0.3s;
    margin: 15px 0;
    &:hover {
      transform: scale(1.1);
    }
  }
`
const LogoContainer = styled.div`
  ${flexAlignCenter}
  border-right: 3px solid var(--tertiary);
  @media(max-width: 768px) {
    border-right: none;
    border-bottom: 2px solid var(--tertiary);
  }
  flex-direction: column;
  div {
    margin-top: 15px;
  }
`
const ListContainer = styled.div`
  ${flexAlignCenter}
  flex-direction: column;
  border-left: 3px solid var(--tertiary);
  @media(max-width: 768px) {
    border: none;
  }
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
        @media(max-width: 768px) {
          width: 40px;
        }
      }
    }
  }
`

export {
  Container,
  LogoContainer,
  ListContainer
};