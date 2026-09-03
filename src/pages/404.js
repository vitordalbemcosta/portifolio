import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Seo from '../components/Seo'

const NotFoundPage = () => <Page><span>404</span><h1>This page has wandered off.</h1><p>The address may have changed, or the page may no longer exist.</p><Link to="/">Return home <b aria-hidden="true">↗</b></Link></Page>
export default NotFoundPage
export const Head = () => <Seo title="Page not found" pathname="/404/" />
const Page=styled.section`width:min(calc(100% - 40px),800px);margin:auto;min-height:72vh;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;span{color:var(--color-accent-strong);font-size:.8rem;font-weight:800;letter-spacing:.16em;}h1{font-size:clamp(3rem,8vw,6rem);line-height:1;letter-spacing:-.055em;margin:18px 0;}p{color:var(--color-muted);font-size:1.1rem;}a{margin-top:22px;padding:13px 20px;border-radius:999px;background:var(--color-ink);color:#fff!important;font-weight:750;}`
