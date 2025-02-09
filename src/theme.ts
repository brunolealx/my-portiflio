import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, grey, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

theme = responsiveFontSizes(theme)
export default theme;