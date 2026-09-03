import React from "react";
import HomePage from "../pageComponents/Home";
import Seo from "../components/Seo";

const IndexPage = () => {
  return <HomePage />;
};

export default IndexPage;

export const Head = () => <Seo />;
