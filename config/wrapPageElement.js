import React from "react";
import Layout from "../src/components/Layout";

const wrapPageElement = ({ element, props }) => {
  return React.createElement(Layout, props, element);
};

export default wrapPageElement;
