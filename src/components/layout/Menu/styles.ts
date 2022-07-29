import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 30px 60px;
    height: auto;
  a {
    text-decoration: none;
    color: var(--dark);
    font-weight: bold;
    transition: all 0.3s;
  }
  .active {
    transform: scale(1.1);
    position: relative;
    &::before {
      content: "";
      border: 2px solid #000;
      position: absolute;
      left: -10px;
      top: 0;
      bottom: 0;
    }
    &::after {
      content: "";
      border: 2px solid #000;
      position: absolute;
      right: -10px;
      top: 0;
      bottom: 0;
    }
  }
`