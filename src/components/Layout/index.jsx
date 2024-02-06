import React from 'react'
import styled from 'styled-components'
import bgImage from '../../images/bg.jpg'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar />
      {children}
      <Footer />
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(50px);
    z-index: -1;
  }
`

export default Layout
