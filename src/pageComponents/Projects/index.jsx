import React from 'react'
import styled from 'styled-components'
import Box from '../../components/Box'
import personalProjectsData from '../../utils/personalProjectsData'
import professionalProjectsData from '../../utils/professionalProjectsDatal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import breakpoints from '../../breakpoints'

//todo: adicionar os projetos
//todo: criar uma pasta separada para os dados dessa array de projetos
//todo: criar uma rota/pagina para cada sessao

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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage src={project.image} alt={project.title} />
            </a>
            <ProjectTitle>{project.title}</ProjectTitle>
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RepositoryImage src={project.repository} alt="Repository" />
            </a>
          </ProjectItem>
        ))}
      </ProjectsWrapper>
      <Section>
        <ArrowIcon icon={faArrowRight} />
        <Title>
          <WhiteText>Projects</WhiteText> ('Personal || School')
        </Title>
      </Section>
      <ProjectsWrapper>
        {personalProjectsData.map((project) => (
          <ProjectItem key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage src={project.image} alt={project.title} />
            </a>
            <ProjectTitle>{project.title}</ProjectTitle>
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RepositoryImage src={project.repository} alt="Repository" />
            </a>
          </ProjectItem>
        ))}
      </ProjectsWrapper>
    </Box>
  )
}

export default Projects

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const ProjectImage = styled.img`
  width: 28vw;
  max-width: 350px;
  border-radius: 8px;
  transition: transform 0.3s ease;
  gap: 20px;

  &:hover {
    transform: scale(1.1);
    opacity: 0.4;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 60vw;
  }
`

const ProjectTitle = styled.h3`
  margin-top: 10px;
  color: white;
  transition: color 0.2s ease;

  &:hover {
    color: #ffc107;
  }
`
const RepositoryImage = styled.div`
  width: 42px;
  height: 42px;
  background-color: red;
  border-radius: 50%;
  margin: 20px 0;
`

const Section = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  letter-spacing: 0.2rem;
`

const Title = styled.h2`
  margin-left: 10px;
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
