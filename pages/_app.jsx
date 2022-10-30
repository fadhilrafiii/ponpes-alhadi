import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import theme from 'utils/theme';

import '../styles/globals.css';

const cache = createCache({
  key: 'css',
  prepend: true,
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
};

export default MyApp;
