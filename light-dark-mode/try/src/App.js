import { darkTheme, lightTheme, GlobalStyles } from "./Themes.js";
import "./App.css";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import FetchAPI from "./FetchAPI";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <button onClick={() => themeToggler()}>Change Theme</button>
        <br />
        <FetchAPI />
      </StyledApp>
      
    </ThemeProvider>
  );
}

export default App;
