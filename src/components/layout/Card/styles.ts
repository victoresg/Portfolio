import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  color: var(--tertiary);
  margin: 1rem;
  padding: 30px;
  border-radius: 10px;
  transition: transform 250ms;
  max-width: 800px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: var(--tertiary);
    opacity: 0.1;
    transition: all 0.3s;
    border-radius: 10px;
  }

  &:hover {
    transform: translateY(-10px) translateX(10px);
  }
  &:hover:before {
    opacity: 0;
    transition: all 0.3s;
  }

  h2 {
    text-align: left;
    width: 100%;
  }
`