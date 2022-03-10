import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export default responsiveFontSizes(
  createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#1D5380",
        light: "#6096c9",
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
      letterSpacing: 10,
    },
  })
);
