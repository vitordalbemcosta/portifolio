import React from 'react'
import styled, { keyframes } from 'styled-components'
import PhotoVitor from '../../images/vitor-photo.jpg'
import Box from '../../components/Box'
import breakpoints from '../../breakpoints'

const Hero = () => {
  return (
    <Box>
      <HeroWrapper>
        <LeftContent>
          <GlowHeader>Hi! I'm Vitor</GlowHeader>
          <GlowText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed at magna vel ante eleifend vestibulum. Duis sodales
            justo et urna fringilla, in lacinia ex congue.
          </GlowText>
        </LeftContent>
        <RightContent>
          <Image src={PhotoVitor} alt="Vitor's image" />
        </RightContent>
      </HeroWrapper>
    </Box>
  )
}

export default Hero

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 20px;
  height: 60vh;
  margin-bottom: 20vh;

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: start;
  }
`

const LeftContent = styled.div`
  max-width: 600px;
`

const GlowHeader = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  letter-spacing: -0.025em;
  color: #fff;
  text-shadow: 0 0 6rem rgba(192, 219, 255, 0.3),
    0 0 78rem rgba(167, 139, 250, 0.3);

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 30px;
  }
`

const GlowText = styled.h3`
  font-size: 1.6em;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  text-shadow: 0 0 6rem rgba(192, 219, 255, 0.3),
    0 0 1rem rgba(122, 139, 250, 0.3);
  line-height: 2.25rem;
  color: #d1d5d8;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.3em;
  }
`

const RightContent = styled.div`
  margin-top: 20px;
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
