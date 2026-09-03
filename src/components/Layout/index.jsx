import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import Navbar from '../Navbar'
import '../../styles/global.css'

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <SkipLink href="#main-content">Skip to content</SkipLink>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  position: relative;
  min-height: 100vh;
`

const SkipLink = styled.a`
  position: fixed;
  z-index: 100;
  top: 12px;
  left: 12px;
  transform: translateY(-150%);
  padding: 10px 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.brandPalette.dark};
  color: white !important;
  &:focus { transform: translateY(0); }
`

export default Layout
