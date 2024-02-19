import React from 'react'
import styled from 'styled-components'
import Box from '../../components/Box'
import breakpoints from '../../breakpoints'

const HomePage = () => {
  return (
    <Box>
      <HomeWrapper>
        <Content>
          <GlowHeader>Hi! I'm Vitor</GlowHeader>
          <GlowText>
            Crafting sleek web experiences with every click - I'm a frontend
            developer dedicated to building exceptional web applications!
          </GlowText>
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
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 20px;
  min-height: 82vh;

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 20px;
  }
`

const Content = styled.div`
  max-width: 600px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 67vh;
  }
`

const GlowHeader = styled.h1`
  font-size: 3em;
  margin-bottom: 25px;
  position: relative;
  overflow: hidden;
  letter-spacing: -0.025em;
  color: #fff;
  text-shadow: 0 0 1rem rgba(92, 38, 3, 0.97);

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 30px;
  }
`

const GlowText = styled.h3`
  font-size: 1.9em;
  max-width: 850px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  line-height: 2.25rem;
  text-shadow: 0 0 0.1rem rgba(4, 4, 2, 0.989);
  color: #ffc107;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.3em;
    line-height: 1.8rem;
  }
`