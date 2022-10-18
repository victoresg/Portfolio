import styled from "styled-components";

export const Container = styled.main`
  @media(min-width: 1200px) {
    padding: 0 150px;
  }
  @media(min-width: 992) {
    padding: 0 50px;
  }
  @media(min-width: 768) {
    padding: 0 50px;
  }
  h1 {
    color: var(--primary);
  }
`