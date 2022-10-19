import { createTheme } from '@mui/material';

import { COLORS } from 'constants/colors';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  palette: {
    primary: {
      main: COLORS.Primary,
    },
    secondary: {
      main: COLORS.Secondary,
    },
    custom: {
      main: COLORS.Tertiary,
      light: COLORS.TertiaryLight,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 560,
      md: 768,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: COLORS.Secondary,
          color: COLORS.Primary,
        },
      },
    },
  },
});

export default theme;
