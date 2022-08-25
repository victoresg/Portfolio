import styled from "styled-components";
import { css } from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media(max-width: 768px) {
    padding-top: 8rem;
    flex-direction: column;
  }
  padding: 50px;
`

const baseColumnStyle = css`
  background-color: var(--primary);
  border: 1px solid var(--quartinary);
  border-radius: 10px;
  padding: 15px;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-right: 15px;
  padding: 25px 40px;
  border-radius: 10px;
  @media(max-width: 768px) {
    margin-bottom: 1rem;
    flex-direction: column;
  }

  > div {
    margin: 0 10px;
    max-width: 550px;
    @media(max-width: 768px) {
      margin: 10px 0;
    }
    h6, p {
      color: var(--tertiary);
    }
     > p {
      color: var(--tertiary);
      margin: 15px 0;
     }
  }
  p {
    margin-top: 10px;
    line-height: 25px;
  }
`
const FirstColumn = styled.div `
  display: flex;
  flex-direction: column;
  > div {
    ${baseColumnStyle}
    :nth-child(2) {
     margin-top: 30px;
    }
  }
`

const SecondtColumn = styled.div `
  div {
    ${baseColumnStyle}
    > details {
      margin-top: 2rem;
      color: var(--tertiary);
      summary {
        cursor: pointer;
      }
      p {
        padding-left: 15px;
      }
    }
  }
`

export {
  AboutContainer,
  RowContainer,
  FirstColumn,
  SecondtColumn
}