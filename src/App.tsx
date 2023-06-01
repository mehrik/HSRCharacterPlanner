import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Layout>
          <Header />
          <Body />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
