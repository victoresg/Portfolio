import styled from "styled-components";

export const MyName = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 768px) {
    text-align: center;
    flex-direction: column;
  }
  h2 {
    color: var(--tertiary);
    @media(max-width: 768px) {
      margin-top: 30px;
    }
  }
  h4 {
    line-height: 30px;
  }
  img {
    width: 200px;
    border-radius: 10px;
    margin-left: 50px;
    @media(max-width: 768px) {
      margin-left: 0;
      margin-top: 30px;
    }
  }
`