import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Box from '../../components/Box'
import personalProjectsData from '../../utils/personalProjectsData'
import professionalProjectsData from '../../utils/professionalProjectsDatal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import breakpoints from '../../breakpoints'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

const Projects = () => {
  return (
    <Box>
      <Section>
        <Typist cursor={{ show: false }} avgTypingDelay={30} stdTypingDelay={1}>
          <Title>Projects (Professional)</Title>
        </Typist>
      </Section>
      <ProjectsWrapper>
        {professionalProjectsData.map((project) => (
          <ProjectItem key={project.id}>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage
                effect="blur"
                src={project.image}
                alt={project.title}
              />
            </Link>
            <Link
              to={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <FontAwesomeIcon icon={faGithub} style={iconStyle} />
            </Link>
            <ProjectDetails>{project.details}</ProjectDetails>
            <ProjectTechnologies>{project.technologies}</ProjectTechnologies>
          </ProjectItem>
        ))}
      </ProjectsWrapper>
      <Section>
        <Typist cursor={{ show: false }} avgTypingDelay={30} stdTypingDelay={1}>
          <Title>Projects (Personal && School)</Title>
        </Typist>
      </Section>
      <ProjectsWrapper>
        {personalProjectsData.map((project) => (
          <ProjectItem key={project.id}>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage
                effect="blur"
                src={project.image}
                alt={project.title}
              />
            </Link>
            <Link
              to={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <FontAwesomeIcon icon={faGithub} style={iconStyle} />
            </Link>
            <ProjectDetails>{project.details}</ProjectDetails>
            <ProjectTechnologies>{project.technologies}</ProjectTechnologies>
          </ProjectItem>
        ))}
      </ProjectsWrapper>
    </Box>
  )
}

export default Projects

const iconStyle = {
  margin: '20px 10px 16px 10px',
  color: 'black',
  width: '36px',
  height: '36px',
}

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 60px 0;

  @media screen and (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`

const ProjectItem = styled.div`
  padding: 24px;
`

const ProjectImage = styled(LazyLoadImage)`
  width: 20vw;
  max-width: 350px;
  border-radius: 8px;
  transition: transform 0.3s ease;
  gap: 20px;
  margin-bottom: 26px;

  &:hover {
    transform: scale(1.29);
    opacity: 1;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 75vw;
  }
`

const ProjectTitle = styled.h3`
  margin-top: 10px;
  color: black;
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: #ffc107;
  }
`
const ProjectDetails = styled.h3`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 400;
  color: black;
`
const ProjectTechnologies = styled.h3`
  color: #a39d9deb;
  text-shadow: 3px black;
  opacity: 1;
  font-weight: 200;
  margin-top: 20px;
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 60px 0;

  @media screen and (max-width: ${breakpoints.tablet}) {
    justify-content: start;
    margin-left: 25px;
  }
`

const Title = styled.h2`
  color: black;
  display: flex;
  align-items: center;
`
