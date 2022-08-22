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
  h2 {
    text-align: left;
    width: 100%;
  }
  &::before {  
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &::before {
    content: "e minha paixão é o Front-End!";
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: bold;
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0;
    background: var(--primary);
    transition: transform .3s ease;
  }
`