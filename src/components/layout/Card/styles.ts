import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  color: var(--tertiary);
  margin: 1rem;
  padding: 30px;
  border-radius: 10px;
  h2 {
    text-align: left;
    width: 100%;
  }
`