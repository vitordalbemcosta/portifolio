import React from 'react'
import styled from 'styled-components'
import PhotoVitor from '../../images/vitor-photo.jpg'
import Box from '../../components/Box'
import breakpoints from '../../breakpoints'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

const About = () => {
  return (
    <Box>
      <AboutWrapper>
        <LeftContent>
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={60}
            stdTypingDelay={1}
          >
            <GlowHeader>This is me.</GlowHeader>
          </Typist>
          <GlowHeaderTechnologies>
            ⚛ Here are some technologies I work with:
          </GlowHeaderTechnologies>
          <Technologies>
            #Angular C# .net #HTML #CSS/Scss #React.js #JavaScript/TypeScript
            #Handlebars.js #Node.js #Express.js #MongoDB #Rest-API #Graphql
            #Gatsby.js #Git #GitHub #GitLabs #React-testing-library #Jest #AWS
            #I18n #Jira #Kanban
          </Technologies>
          <GlowHeaderTechnologies>📚 Education:</GlowHeaderTechnologies>
          <Technologies>
            Full-Stack Web Development Bootcamp @ Ironhack Lisbon
          </Technologies>
          <Technologies>
            Bachelor of Arts in Business @ CCT College Dublin
          </Technologies>
        </LeftContent>
        <RightContent>
          <Image effect="blur" src={PhotoVitor} alt="Vitor's photo" />
        </RightContent>
      </AboutWrapper>
    </Box>
  )
}

export default About

const AboutWrapper = styled.div`
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
const LeftContent = styled.div`
  max-width: 600px;
`

const GlowHeader = styled.h1`
  font-size: 3em;
  margin-bottom: 43px;
  position: relative;
  overflow: hidden;
  letter-spacing: -0.025em;
  color: black;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 30px;
  }
`
const GlowHeaderTechnologies = styled.h1`
  font-size: 1.6em;
  margin: 8px 0;
  position: relative;
  overflow: hidden;
  letter-spacing: -0.025em;
  color: black;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.2em;
  }
`

const Technologies = styled.p`
  color: #a39d9deb;
  text-shadow: 3px black;
  opacity: 1;
  font-weight: 600;
  margin-top: 14px;
  letter-spacing: 1px;
`
const RightContent = styled.div`
  margin-top: 30px;
`

const Image = styled(LazyLoadImage)`
  width: 100%;
  max-width: 400px;
  border-radius: 800px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    max-width: 420px;
    margin-bottom: 40px;
  }
`
