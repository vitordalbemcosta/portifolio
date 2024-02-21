import React from 'react'
import styled from 'styled-components'
import PhotoVitor from '../../images/vitor-photo.jpg'
import Box from '../../components/Box'
import breakpoints from '../../breakpoints'

const About = () => {
  return (
    <Box>
      <AboutWrapper>
        <LeftContent>
          <GlowHeader>Hey!👋 This is me.</GlowHeader>
          <GlowHeaderTechnologies>
            ⚛ Here are some technologies I work with:
          </GlowHeaderTechnologies>
          <Technologies>
            #html #css/scss #react #javascript/typescript #handlebars.js
            #node.js #express.js #mongoDB #rest-api #graphql #gatsby.js #git
            #jest #aws #i18n #Jira
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
          <Image src={PhotoVitor} alt="Vitor's photo" loading="lazy" />
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
  color: #fff;
  text-shadow: 0 0 1rem rgba(192, 219, 255, 0.3);

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
  color: #ffffffcd;
  text-shadow: 0 0 8rem rgba(1, 2, 3, 0.95);

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.2em;
  }
`

const Technologies = styled.p`
  color: rgba(245, 221, 246, 0.842);
  text-shadow: 0 0 0.3rem rgba(51, 6, 71, 0.989);
  opacity: 1;
  font-weight: 600;
`
const RightContent = styled.div`
  margin-top: 30px;
`

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 800px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    max-width: 420px;
    margin-bottom: 40px;
  }
`
