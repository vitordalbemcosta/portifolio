import React from "react";
import PageComponents from "../pageComponents/index";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <main>
      <PageComponents />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Vitor Dalbem Costa</title>;
