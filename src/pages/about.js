import React from "react";
import About from "../pageComponents/About";
import Seo from "../components/Seo";

const AboutPage = () => {
  return <About />;
};

export default AboutPage;

export const Head = () => <Seo title="About & experience" pathname="/about/" description="Experience and selected full-stack work from Vitor Dalbem Costa, Software Developer at AdvanceWorks working with Angular, C#, React and TypeScript." />;
