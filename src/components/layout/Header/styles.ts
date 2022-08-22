import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--primary);
  @media(max-width: 768px) {
    position: fixed;
    width: 100%;
  }
  h1 {
    text-align: center;
  }
`