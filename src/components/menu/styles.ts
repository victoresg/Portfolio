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
        left: -5px;
        height: 100%;
      }
      &::after {
        content: "";
        border: 2px solid #000;
        position: absolute;
        right: -5px;
        height: 100%;
      }
    }
  }
`