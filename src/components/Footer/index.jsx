import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => <Wrapper><Inner><Top><div><Mark>VD<span>C</span></Mark><p>Software Developer building accessible, scalable digital products.</p></div><Nav aria-label="Footer navigation"><Link to="/about">About</Link><Link to="/projects">Work</Link><Link to="/contacts">Contact</Link></Nav></Top><Bottom><small>© {new Date().getFullYear()} Vitor Dalbem Costa</small><Social><a href="https://www.linkedin.com/in/vitordalbemcosta/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/vitordalbemcosta" target="_blank" rel="noopener noreferrer">GitHub ↗</a></Social></Bottom></Inner></Wrapper>
export default Footer
const Wrapper=styled.footer`border-top:1px solid var(--color-line);background:var(--color-ink);color:#fff;`
const Inner=styled.div`width:min(calc(100% - 40px),var(--container));margin:auto;padding:58px 0 28px;@media(max-width:480px){width:min(calc(100% - 28px),var(--container));}`
const Top=styled.div`display:flex;justify-content:space-between;gap:40px;padding-bottom:54px;div>p{max-width:380px;color:#aeb3be;}@media(max-width:600px){flex-direction:column;}`
const Mark=styled.p`margin:0 0 18px!important;font-size:1.4rem;font-weight:850;letter-spacing:-.05em;color:#fff!important;span{color:var(--color-accent);}`
const Nav=styled.nav`display:flex;flex-wrap:wrap;gap:clamp(16px,4vw,38px);font-weight:700;a{padding:6px 0;}a:hover{color:var(--color-accent);}`
const Bottom=styled.div`display:flex;justify-content:space-between;gap:24px;border-top:1px solid #343a49;padding-top:24px;color:#aeb3be;@media(max-width:600px){flex-direction:column;}`
const Social=styled.div`display:flex;flex-wrap:wrap;gap:20px;a:hover{color:#fff;}`
