import React from 'react'
import styled from 'styled-components'
import Box from '../../components/Box'

//todo: adicionar os projetos

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    image: '',
    link: '',
  },
  {
    id: 2,
    title: 'Project 2',
    image: '',
    link: '',
  },
  {
    id: 3,
    title: 'Project 3',
    image: '',
    link: '',
  },
  {
    id: 4,
    title: 'Project 4',
    image: '',
    link: '',
  },
  {
    id: 5,
    title: 'Project 5',
    image: '',
    link: '',
  },
  {
    id: 6,
    title: 'Project 6',
    image: '',
    link: '',
  },
]

const Projects = () => {
  return (
    <Box>
      <ProjectsWrapper>
        {projectsData.map((project) => (
          <ProjectItem key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
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
  text-align: center;
`

const ProjectImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.6);
  }
`

const ProjectTitle = styled.h3`
  margin-top: 10px;
`
