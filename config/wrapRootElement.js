import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";

const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export default wrapRootElement;
