import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <Header>
      <NavbarWrapper>
        <Brand to="/" aria-label="Vitor Dalbem Costa, home">VD<span>C</span></Brand>
        <RightSection>
          <NavbarItem to="/about" activeClassName="active">About</NavbarItem>
          <NavbarItem to="/projects" activeClassName="active">Work</NavbarItem>
          <NavbarItem to="/contacts" activeClassName="active">Contact</NavbarItem>
        </RightSection>
      </NavbarWrapper>
    </Header>
  )
}

export default Navbar

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(222, 219, 212, 0.75);
  background: rgba(250, 248, 244, 0.88);
  backdrop-filter: blur(16px);
`

const NavbarWrapper = styled.nav`
  width: min(calc(100% - 40px), var(--container));
  min-height: 76px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width:480px){width:min(calc(100% - 28px),var(--container));min-height:68px;}
`

const Brand = styled(Link)`
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  span { color: var(--color-accent); }
`

const RightSection = styled.div`
  display: flex;
  gap: clamp(16px, 4vw, 38px);
  @media(max-width:360px){gap:12px;}
`

const NavbarItem = styled(Link)`
  position: relative;
  padding: 8px 0;
  font-size: 0.92rem;
  font-weight: 650;
  cursor: pointer;
  transition: color 0.2s ease;
  text-decoration: none;
  color: inherit;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1px;
    height: 2px;
    border-radius: 2px;
    background: var(--color-accent);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.22s ease;
  }
  &:hover, &.active { color: var(--color-accent-strong); }
  &:hover::after, &.active::after { transform: scaleX(1); transform-origin: left; }
  @media(max-width:360px){font-size:.82rem;}
`
