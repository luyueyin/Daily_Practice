import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme.js";
import FetchAPI from "./FetchAPI";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  margin-top: 20px;
  margin-left: 20px;
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
