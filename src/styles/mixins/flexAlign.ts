import { css } from "styled-components";

const flexAlignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const flexAlignStart = css`
  ${flexAlignCenter}
  align-items: flex-start;
`;

export  {
  flexAlignCenter,
  flexAlignStart
};