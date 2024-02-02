import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../breakpoints'

//todo: fazer que clicar no item da nav faca autoscroll para a sessao correta
//todo: adicionar polished pra nao ter px em font-size

const Navbar = () => {
  const navbarItems = ['.home()', '.aboutMe()', '.projects()', '.getInTouch()']

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
  top: 0;
  background: transparent;
  padding: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffffffd6;
  margin-bottom: 20px;
  transition: margin 0.1s ease;
`

const NavbarItem = styled.div`
  font-size: 13px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #ffc107;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 9px;
  }
`
