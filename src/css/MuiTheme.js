import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffd0b0',
      main: '#ff9e80',
      dark: '#c96f53',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ff6434',
      main: '#dd2c00',
      dark: '#a30000',
      contrastText: '#ffffff',
    },
  },
});

export default theme;