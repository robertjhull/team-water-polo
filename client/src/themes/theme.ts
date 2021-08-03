import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
    },
    subtitle1: {
      color: '#acb9db',
      fontWeight: 'bolder',
      fontSize: '.8rem',
    },
    subtitle2: {
      color: '#b2b2b2',
      fontSize: '.8rem',
    },
  },
  palette: {
    primary: { main: '#3A8DFF' },
    info: {
      main: '#F4F6FF',
      light: '#B5B6BD',
      dark: '#E5ECFC',
    },
  },
  shape: {
    borderRadius: 5,
  },
});
