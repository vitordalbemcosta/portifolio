import styled from 'styled-components'
import breakpoints from '../../breakpoints'

const Box = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: ${breakpoints.desktop}) {
    padding: 15px;
  }

  @media screen and (max-width: ${breakpoints.laptop}) {
    padding: 10px;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    padding: 5px;
  }
`

export default Box
