import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#3E4042',
        main: '#242526',
        dark: '#18191A',
        contrastText: '#D8D9DD',
      },
      secondary: {
        light: '#E4E6EF',
        main: '#E4E6EA',
        dark: '#B0B3B8',
        contrastText: '#000',
      },
      text: {
        primary: '#E4E6EF',
      },
      background: {
        default: '#3E4042',
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
