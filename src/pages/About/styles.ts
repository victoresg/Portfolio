import styled from "styled-components";

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

const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--primary);
  margin-right: 15px;
  padding: 25px 40px;
  border-radius: 10px;
  @media(max-width: 768px) {
    margin-bottom: 1rem;
    flex-direction: column;
  }

  > div {
    border: 1px solid var(--quartinary);
    padding: 15px;
    border-radius: 10px;
    margin: 0 10px;
    > h6, p {
      color: var(--tertiary);
    }
  }
  p {
    margin-top: 30px;
    line-height: 25px;
  }
`

export {
  AboutContainer,
  SkillsContainer
}