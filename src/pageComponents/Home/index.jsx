import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Box from '../../components/Box'
import breakpoints from '../../breakpoints'

const HomePage = () => {
  return (
    <Box>
      <HomeWrapper>
        <Content>
          <Eyebrow>Software Developer · Lisbon, Portugal</Eyebrow>
          <Heading>Building digital products that scale with <Accent>clarity.</Accent></Heading>
          <SubHeading>
            I’m Vitor Dalbem Costa, a software developer focused on accessible interfaces,
            resilient frontend architecture and thoughtful user experiences.
          </SubHeading>
          <Actions>
            <PrimaryButton to="/projects">View my work <span aria-hidden="true">↗</span></PrimaryButton>
            <SecondaryButton to="/about">About me</SecondaryButton>
          </Actions>
          <CurrentRole>
            <span>Currently</span>
            <div><strong>Software Developer · AdvanceWorks</strong><small>BMW Financial Services Portugal · Full-stack project</small></div>
            <time dateTime="2025-02">Feb 2025 — Present</time>
          </CurrentRole>
        </Content>
      </HomeWrapper>
    </Box>
  )
}

export default HomePage

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: clamp(64px, 10vw, 136px) 20px;
  min-height: calc(100vh - 76px);

  @media screen and (max-width: ${breakpoints.tablet}) {
    min-height: auto;
    padding: 72px 0 64px;
  }

  @media screen and (max-width: 480px) {
    padding: 56px 0 48px;
  }
`

const Content = styled.div`
  max-width: 900px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
  }
`

const Heading = styled.h1`
  font-size: clamp(3rem, 8vw, 7.1rem);
  line-height: 0.96;
  margin: 22px 0 30px;
  position: relative;
  overflow: hidden;
  letter-spacing: -0.055em;
  color: var(--color-ink);

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin: 18px 0 24px;
  }

  @media screen and (max-width: 380px) {
    font-size: 2.65rem;
  }
`

const Accent = styled.span`color: var(--color-accent);`

const Eyebrow = styled.p`
  color: var(--color-accent-strong);
  font-size: 0.82rem;
  font-weight: 750;
  letter-spacing: 0.13em;
  text-transform: uppercase;
`

const SubHeading = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  max-width: 720px;
  margin: 0;
  position: relative;
  line-height: 1.65;
  color: var(--color-muted);

  @media screen and (max-width: ${breakpoints.tablet}) {
    line-height: 1.6;
  }
`

const Actions = styled.div`display: flex; flex-wrap: wrap; gap: 12px; margin-top: 36px;`
const PrimaryButton = styled(Link)`
  display: inline-flex; align-items: center; gap: 10px; padding: 14px 22px; border-radius: 999px;
  background: var(--color-ink); color: white !important; font-weight: 700; transition: transform .2s ease, background .2s ease;
  &:hover { transform: translateY(-2px); background: var(--color-accent-strong); }
  span { transition: transform .2s ease; } &:hover span { transform: translate(2px, -2px); }
`
const SecondaryButton = styled(Link)`
  display: inline-flex; align-items: center; padding: 14px 22px; border-radius: 999px;
  border: 1px solid var(--color-line); background: rgba(255,255,255,.7); font-weight: 700; transition: transform .2s ease, border-color .2s ease;
  &:hover { transform: translateY(-2px); border-color: var(--color-accent); }
`
const CurrentRole = styled.div`
  display: grid; grid-template-columns: auto 1fr auto; gap: 18px; align-items: center; max-width: 680px;
  margin-top: 68px; padding-top: 20px; border-top: 1px solid var(--color-line); font-size: .92rem;
  span { color: var(--color-accent-strong); font-weight: 750; }
  div { display:flex; flex-direction:column; min-width:0; }
  small, time { color: var(--color-muted); font-size:.78rem; }
  @media (max-width: 680px) { grid-template-columns: 1fr; gap: 5px; margin-top: 48px; }
`
