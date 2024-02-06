import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Box from '../../components/Box'
import personalProjectsData from '../../utils/personalProjectsData'
import professionalProjectsData from '../../utils/professionalProjectsDatal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import breakpoints from '../../breakpoints'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  return (
    <Box>
      <Section>
        <ArrowIcon icon={faArrowRight} />
        <Title>
          <WhiteText>Projects</WhiteText> ('Professional')
        </Title>
      </Section>
      <ProjectsWrapper>
        {professionalProjectsData.map((project) => (
          <ProjectItem key={project.id}>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage src={project.image} alt={project.title} />
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
        <ArrowIcon icon={faArrowRight} />
        <Title>
          <WhiteText>Projects</WhiteText> ('Personal && School')
        </Title>
      </Section>
      <ProjectsWrapper>
        {personalProjectsData.map((project) => (
          <ProjectItem key={project.id}>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage src={project.image} alt={project.title} />
            </Link>
            <Link
              to={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <FontAwesomeIcon icon={faGithub} style={iconStyle} />
            </Link>
          </ProjectItem>
        ))}
      </ProjectsWrapper>
    </Box>
  )
}

export default Projects

const iconStyle = {
  margin: '20px 10px 16px 10px',
  color: '#ffffff',
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

const ProjectImage = styled.img`
  width: 20vw;
  max-width: 350px;
  border-radius: 8px;
  transition: transform 0.3s ease;
  gap: 20px;
  margin-bottom: 26px;

  &:hover {
    transform: scale(1.1);
    opacity: 0.4;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 75vw;
  }
`

const ProjectTitle = styled.h3`
  margin-top: 10px;
  color: #e6e6e6;
  text-shadow: 0 0 1rem rgba(0, 0, 0, 0.997);
  transition: color 0.2s ease;

  &:hover {
    color: #ffc107;
  }
`
const ProjectDetails = styled.h3`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 400;
  color: #e4e8e5;
  text-shadow: 0 0 3rem rgba(0, 0, 0, 0.997);
`
const ProjectTechnologies = styled.h3`
  color: rgba(245, 221, 246, 0.842);
  text-shadow: 0 0 0.3rem rgba(51, 6, 71, 0.989);
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
  color: #ffc107;
  display: flex;
  align-items: center;
`

const WhiteText = styled.span`
  color: white;
`

const ArrowIcon = styled(FontAwesomeIcon)`
  color: #ffc107;
  margin-right: 5px;
`
