import React from 'react'
import styled from 'styled-components'
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
`

export default Layout
