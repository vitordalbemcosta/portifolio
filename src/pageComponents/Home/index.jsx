import React from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import Box from '../../components/Box'
import breakpoints from '../../breakpoints'

const HomePage = () => {
  return (
    <Box>
      <HomeWrapper>
        <Content>
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={38}
            stdTypingDelay={1}
          >
            <Heading>Hi! I'm Vitor Dalbem Costa</Heading>
            <SubHeading>
              FullStack Dev. Problem-solver, planner, doer.
            </SubHeading>
            <Typist.Delay ms={500} />
            <a href="vitor-dalbem.pdf" download="vitor-dalbem.pdf">
              <StyledButton color="orange">Download my CV</StyledButton>
            </a>
          </Typist>
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
    max-height: 60vh;
  }
`

const Content = styled.div`
  max-width: 700px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 50vh;
  }
`

const Heading = styled.h1`
  font-size: 3em;
  margin-bottom: 25px;
  position: relative;
  overflow: hidden;
  letter-spacing: -0.025em;
  color: black;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin: 80px 0 35px 0;
  }
`

const SubHeading = styled.h3`
  font-size: 1.9em;
  max-width: 850px;
  margin: 0 auto;
  position: relative;
  line-height: 2.25rem;
  color: #edb91ce2;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.3em;
    line-height: 1.8rem;
  }
`

const StyledButton = styled(Button)`
  &&& {
    background-color: black;
    color: white;
    border-radius: 4px;
    padding: 14px 28px;
    font-size: 1.2em;
    margin-top: 23px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1678b1;
    }
  }
`
