import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import breakpoints from '../../breakpoints'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <LeftSection>
        <NavbarItem to="/">Home</NavbarItem>
      </LeftSection>
      <RightSection>
        <NavbarItem to="/about">About</NavbarItem>
        <NavbarItem to="/projects">Projects</NavbarItem>
        <NavbarItem to="/contacts">Contact</NavbarItem>
      </RightSection>
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.div`
  top: 0;
  background: transparent;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffffd6;
  margin-bottom: 20px;
  transition: margin 0.1s ease;
`

const LeftSection = styled.div`
  display: flex;
  padding-left: 50px;
  @media screen and (max-width: ${breakpoints.tablet}) {
    padding-left: 10px;
  }
`

const RightSection = styled.div`
  display: flex;
  gap: 50px;
  padding-right: 50px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    gap: 20px;
    padding-right: 15px;
  }
`

const NavbarItem = styled(Link)`
  font-size: 22px;
  cursor: pointer;
  transition: color 0.2s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #ffc107;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`
