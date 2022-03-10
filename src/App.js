import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import appTheme from "./assets/styles/themes";


let theme = localStorage.getItem("theme");
if (!theme) {
  localStorage.setItem("theme", "light");
}
theme = appTheme(theme || "dark");

const App = () => (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h1">{process.env.WELCOME}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          const currentTheme = localStorage.getItem("theme") || "light";
          if (currentTheme === "dark") {
            localStorage.setItem("theme", "light");
          } else {
            localStorage.setItem("theme", "dark");
          }
          window.location.reload();
        }}
      >
        Click me to update theme
      </Button>
    </ThemeProvider>

);

export default App;
