import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../breakpoints'

//todo: fazer que clicar no item da nav faca autoscroll para a sessao correta

const Navbar = () => {
  const navbarItems = ['Home', 'About me', 'Projects', 'Get in touch']

  return (
    <NavbarWrapper>
      {navbarItems.map((item, index) => (
        <NavbarItem key={index}>
          <h2>{item}</h2>
        </NavbarItem>
      ))}
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  margin-bottom: 20px;
  transition: margin 0.3s ease;

  &.sticky {
    margin-bottom: 20px;
  }
`

const NavbarItem = styled.div`
  font-size: 13px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffc107;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 9px;
  }
`
//todo: adicionar polished pra nao ter px em font-size
