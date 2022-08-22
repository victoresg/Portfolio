import styled from "styled-components";

import { flexAlignCenter } from '../../../styles/mixins/flexAlign'

export const Container = styled.main`
  ${flexAlignCenter}
  min-height: calc(100vh - 200px);
  h1 {
    color: var(--primary);
  }
`