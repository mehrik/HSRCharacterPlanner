import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { AppProvider } from "./providers/AppProvider";
import { CharacterProvider } from "./providers/CharacterProvider";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <AppProvider>
          <CharacterProvider>
            <Layout>
              <Header />
              <Body />
            </Layout>
          </CharacterProvider>
        </AppProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
