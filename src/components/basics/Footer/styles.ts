import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--primary);
  height: 20rem;
  padding: 5rem 10rem;
  h1 {
    text-align: center;
  }
  img {
    width: 100px;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
`