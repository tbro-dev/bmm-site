import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#182259', // Slightly lighter than main
      main: '#021373',  // Deep blue (logo-1)
      dark: '#010a3a',  // Even deeper blue
    },
    secondary: {
      light: '#F2CB05', // Bright yellow (logo-3)
      main: '#F0D400',  // Muted gold (logo-4)
      dark: '#736938',  // Earthy tone (logo-5)
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
       fontWeightRegular: 400,
    fontWeightMedium: 700,
  },
});

const fontHeader = {
  color: rawTheme.palette.text?.primary || '#021373',
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Roboto Condensed', sans-serif",
  textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      default: '#ffffff',
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...fontHeader,
      fontSize: 60,
      letterSpacing: 0,
    },
    h2: {
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 18,
    },
    body1: {
      fontSize: 16,
      fontWeight: rawTheme.typography.fontWeightRegular,
    },
    body2: {
      fontSize: 14,
    },
  },
};

export default theme;