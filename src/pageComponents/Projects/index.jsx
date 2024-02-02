import React from 'react'
import styled from 'styled-components'
import Box from '../../components/Box'
import personalProjectsData from '../../utils/personalProjectsData'
import professionalProjectsData from '../../utils/professionalProjectsDatal'

//todo: adicionar os projetos
//todo: criar uma pasta separada para os dados dessa array de projetos

const Projects = () => {
  return (
    <Box>
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
    </Box>
  )
}

export default Projects

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;
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
`

const ProjectTitle = styled.h3`
  margin-top: 10px;
`
const RepositoryImage = styled.div`
  width: 42px;
  height: 42px;
  background-color: red;
  border-radius: 50%;
  margin: 20px 0;
`
