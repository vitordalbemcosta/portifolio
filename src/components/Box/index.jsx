import styled from 'styled-components'
import breakpoints from '../../breakpoints'

const Box = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: min(calc(100% - 40px), var(--container));
  padding-left: 0;
  padding-right: 0;

  @media screen and (max-width: ${breakpoints.desktop}) {
    width: min(calc(100% - 32px), var(--container));
  }

  @media screen and (max-width: ${breakpoints.laptop}) {
    width: min(calc(100% - 32px), var(--container));
  }
`

export default Box
