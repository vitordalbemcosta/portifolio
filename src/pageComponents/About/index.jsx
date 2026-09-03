import React from 'react'
import styled from 'styled-components'
import Box from '../../components/Box'

const skills = {
  'Frontend development': ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Gatsby', 'Angular', 'HTML', 'CSS / SCSS', 'Tailwind CSS', 'styled-components'],
  'UI, forms & CMS': ['React Hook Form', 'Payload CMS', 'Contentful', 'AGORA Design System', 'Accessible UI', 'Responsive design'],
  'Backend & data': ['C# / .NET', 'Node.js', 'Express.js', 'SQL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'REST APIs / Web Services', 'GraphQL', 'Swagger / OpenAPI', 'Postman'],
  'DevOps & quality': ['Docker', 'Git', 'GitLab', 'CI/CD', 'AWS', 'SonarQube', 'Jest', 'React Testing Library'],
  'Product collaboration': ['OpenProject', 'Miro', 'Figma', 'Jira', 'Kanban'],
}

const TagList = ({ items }) => <Tags aria-label="Technologies used">{items.map(tag => <li key={tag}>{tag}</li>)}</Tags>

const About = () => (
  <>
    <Intro as="section">
      <IntroCopy>
        <Kicker>About</Kicker>
        <h1>Frontend craft with a full-stack perspective.</h1>
        <p>I build modern applications with a focus on frontend architecture, accessibility and performance. My work spans reusable component systems, dynamic forms, API integrations and CMS-driven experiences designed to remain clear as they grow.</p>
        <p>I care about the details users feel and the engineering decisions teams live with: semantic interfaces, resilient patterns, pragmatic collaboration and maintainable code.</p>
      </IntroCopy>
      <Principles aria-label="Engineering principles">
        <Principle><span>01</span><strong>Accessible by design</strong><p>Interfaces that work for more people, from semantics to keyboard flows.</p></Principle>
        <Principle><span>02</span><strong>Built to evolve</strong><p>Reusable architecture that supports products and teams as complexity grows.</p></Principle>
        <Principle><span>03</span><strong>Full-stack context</strong><p>Frontend decisions grounded in APIs, business rules and system constraints.</p></Principle>
      </Principles>
    </Intro>

    <ExperienceSection aria-labelledby="experience-title">
      <SectionHeading><Kicker>Experience</Kicker><h2 id="experience-title">Building products for complex, real-world services.</h2></SectionHeading>
      <Timeline>
        <RoleCard>
          <TimelineMarker aria-hidden="true" />
          <RoleMeta><span>Feb 2025 — Present</span><span>Lisbon, Portugal</span></RoleMeta>
          <h3>Software Developer</h3>
          <Company>AdvanceWorks</Company>

          <CurrentProject>
            <ProjectLabel>Current client project</ProjectLabel>
            <h4>BMW Financial Services Portugal</h4>
            <ProjectMeta>Full-stack product development</ProjectMeta>
            <p>Working through AdvanceWorks on the evolution of financial-services platforms used across three distinct operational experiences: customer-facing journeys, tools for BMW operators and internal back-office systems.</p>
            <ul>
              <li>Implementing new end-to-end features with Angular and C#.</li>
              <li>Improving and modernizing legacy code while preserving business-critical behaviour.</li>
              <li>Working across frontend, backend and integration concerns within an established product ecosystem.</li>
            </ul>
            <TagList items={['Angular', 'C#', '.NET', 'SQL', 'SQL Server', 'Full-stack development']} />
          </CurrentProject>

          <SelectedProject>
            <ProjectLabel>Selected project · Completed</ProjectLabel>
            <h4>IRN — Digital Public Services</h4>
            <ProjectMeta>Feb 2025 — Apr 2026 · National programme, Portugal</ProjectMeta>
            <p>Delivered through a partnership between AdvanceWorks and Accenture: Accenture engaged my services through AdvanceWorks to contribute to the end client, the Instituto dos Registos e Notariado (IRN).</p>
            <p>This European Union-funded programme modernized essential Portuguese public services at national scale. It was designed for services used by millions of people and is expected to contribute hundreds of millions of euros in annual value to Portugal.</p>
            <p>I helped create accessible, highly configurable digital journeys and dynamic forms covering vehicle certificates and ownership transfers, permanent certificates, property and citizen registrations, certificate and record requests, and other public registry services.</p>
            <ul>
              <li>Built reusable, accessible interfaces using the Portuguese Government’s AGORA Design System.</li>
              <li>Developed CMS-driven form definitions with Payload CMS, allowing content and business rules to evolve without code changes for every service variation.</li>
              <li>Worked on scalable frontend architecture, performance and UX across complex, high-impact public-service flows.</li>
              <li>Collaborated with frontend and backend engineers, business analysts, QA, designers and other stakeholders across the partnership.</li>
            </ul>
            <TagList items={['React', 'TypeScript', 'Next.js', 'React Hook Form', 'Payload CMS', 'REST APIs', 'AGORA Design System']} />
          </SelectedProject>
        </RoleCard>
      </Timeline>
    </ExperienceSection>

    <SkillsSection aria-labelledby="skills-title">
      <SectionHeading><Kicker>Toolkit</Kicker><h2 id="skills-title">Technologies I use to ship reliable work.</h2></SectionHeading>
      <SkillGrid>{Object.entries(skills).map(([group, items]) => <SkillCard key={group}><h3>{group}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></SkillCard>)}</SkillGrid>
    </SkillsSection>

    <EducationSection aria-labelledby="education-title">
      <Kicker>Education</Kicker><h2 id="education-title">A foundation in technology and business.</h2>
      <EducationGrid><div><strong>Full-Stack Web Development Bootcamp</strong><span>Ironhack Lisbon</span></div><div><strong>Bachelor of Arts in Business</strong><span>CCT College Dublin</span></div></EducationGrid>
    </EducationSection>
  </>
)

export default About

const Section = styled(Box)`padding-top:clamp(64px,9vw,128px);padding-bottom:clamp(64px,9vw,128px);`
const Intro = styled(Section)`display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);align-items:start;gap:clamp(48px,8vw,112px);@media(max-width:900px){grid-template-columns:1fr;}`
const IntroCopy = styled.div`h1{font-size:clamp(2.7rem,6vw,5.7rem);line-height:1;letter-spacing:-.055em;margin:18px 0 30px;overflow-wrap:anywhere;}p{font-size:clamp(1.03rem,1.8vw,1.23rem);color:var(--color-muted);max-width:720px;margin:0 0 18px;}`
const Kicker = styled.p`margin:0;color:var(--color-accent-strong)!important;font-size:.78rem!important;font-weight:800;letter-spacing:.15em;text-transform:uppercase;`
const Principles = styled.aside`display:grid;border-top:1px solid var(--color-ink);`
const Principle = styled.div`display:grid;grid-template-columns:30px 1fr;column-gap:12px;padding:20px 0;border-bottom:1px solid var(--color-line);span{grid-row:1/3;color:var(--color-accent-strong);font-size:.7rem;font-weight:800;padding-top:3px;}strong{font-size:.94rem;}p{margin:4px 0 0;color:var(--color-muted);font-size:.84rem;line-height:1.55;}`
const ExperienceSection = styled(Section)`border-top:1px solid var(--color-line);`
const SectionHeading = styled.div`max-width:760px;margin-bottom:clamp(38px,6vw,58px);h2{font-size:clamp(2rem,4vw,3.6rem);line-height:1.08;letter-spacing:-.045em;margin:14px 0 0;}`
const Timeline = styled.div`border-left:1px solid var(--color-line);margin-left:8px;padding-left:clamp(20px,4vw,54px);`
const RoleCard = styled.article`position:relative;max-width:980px;h3{font-size:clamp(1.7rem,3vw,2.5rem);margin:15px 0 0;letter-spacing:-.035em;}`
const TimelineMarker = styled.span`position:absolute;width:17px;height:17px;border:4px solid var(--color-canvas);border-radius:50%;background:var(--color-accent);left:calc(clamp(20px,4vw,54px) * -1 - 9px);top:5px;box-shadow:0 0 0 1px var(--color-accent);`
const RoleMeta = styled.div`display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px 20px;color:var(--color-muted);font-size:.86rem;font-weight:650;`
const Company = styled.p`margin:2px 0 24px;color:var(--color-accent-strong)!important;font-weight:750;`
const ProjectCard = styled.section`margin-top:24px;padding:clamp(22px,4vw,42px);border:1px solid var(--color-line);border-radius:var(--radius-lg);background:rgba(255,255,255,.72);h4{font-size:clamp(1.3rem,2.5vw,2rem);margin:8px 0 2px;overflow-wrap:anywhere;}p,li{color:var(--color-muted);}p{max-width:850px;}ul{padding-left:20px;}li+li{margin-top:8px;}@media(max-width:480px){border-radius:18px;}`
const CurrentProject = styled(ProjectCard)`border-color:rgba(243,107,33,.38);box-shadow:var(--shadow-soft);`
const SelectedProject = styled(ProjectCard)`margin-top:18px;`
const ProjectLabel = styled.span`font-size:.7rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--color-accent-strong);`
const ProjectMeta = styled.p`margin:0 0 24px;font-size:.86rem;font-weight:650;`
const Tags = styled.ul`display:flex;flex-wrap:wrap;gap:8px;padding:0!important;margin:28px 0 0;list-style:none;li{margin:0!important;padding:7px 11px;border-radius:999px;background:#f2eee8;color:var(--color-ink);font-size:.75rem;font-weight:700;}`
const SkillsSection = styled(Section)`border-top:1px solid var(--color-line);`
const SkillGrid = styled.div`display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:14px;`
const SkillCard = styled.article`min-width:0;padding:24px;border:1px solid var(--color-line);border-radius:var(--radius-md);background:rgba(255,255,255,.55);h3{margin:0 0 18px;font-size:1rem;}ul{list-style:none;padding:0;margin:0;color:var(--color-muted);font-size:.9rem;}li+li{margin-top:8px;}`
const EducationSection = styled(Section)`border-top:1px solid var(--color-line);h2{font-size:clamp(2rem,4vw,3.6rem);line-height:1.08;margin:14px 0 42px;letter-spacing:-.045em;}`
const EducationGrid = styled.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;@media(max-width:650px){grid-template-columns:1fr}div{display:flex;flex-direction:column;padding:24px;border-top:2px solid var(--color-ink);background:rgba(255,255,255,.45);}span{color:var(--color-muted);margin-top:5px;}`
