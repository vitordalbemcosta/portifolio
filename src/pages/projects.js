import React from "react";
import Projects from "../pageComponents/Projects";
import Seo from "../components/Seo";

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;

export const Head = () => <Seo title="Selected work" pathname="/projects/" description="Selected professional and personal software projects by Vitor Dalbem Costa." />;
