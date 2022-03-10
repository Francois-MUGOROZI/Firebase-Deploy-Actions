import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: '#1D5380',
        main: '#121B20',
        dark: '#007bff',
      },
      secondary: {
        light: '#c6cbcf',
        main: '#a5a6a8',
        dark: '#18191A',
      },
      text: {
        primary: '#fff',
        secondary: '#18191A',
      },
      background: {
        default: '#fff',
        paper: '#fff',
      },
      common: {
        black: '#1D5380',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'Raleway , Arial',
        'Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  }),
);
