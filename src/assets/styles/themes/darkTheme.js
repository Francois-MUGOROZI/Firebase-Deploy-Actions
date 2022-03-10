import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export default responsiveFontSizes(
  createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#171819",
        light: "#4b4d4f",
      },
      common: {
        black: "#1D5380",
        white: "#e8ecef",
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "Rambla, sans-serif",
        "Raleway , Arial",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  })
);
