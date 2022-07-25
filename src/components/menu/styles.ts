import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 60px;
  a {
    &:hover {
      /* background-color: red; */
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
  }
`