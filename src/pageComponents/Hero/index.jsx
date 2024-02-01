import React from 'react'
import styled from 'styled-components'
import PhotoVitor from '../../images/vitor-photo.jpg'
import Box from '../../components/Box'
import breakpoints from '../../breakpoints'

const Hero = () => {
  return (
    <Box>
      <HeroWrapper>
        <LeftContent>
          <Header>Hi! I'm Vitor</Header>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed at magna vel ante eleifend vestibulum. Duis sodales
            justo et urna fringilla, in lacinia ex congue.
          </Text>
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
  height: 100vh;

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: start;
  }
`

const LeftContent = styled.div`
  max-width: 600px;
`

const Header = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 30px;
  }
`

const Text = styled.p`
  font-size: 1.6em;
  max-width: 500px;
  margin: 0 auto;

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
