import { ThemeProvider } from '@mui/material';

import theme from 'utils/theme';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
