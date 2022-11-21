import SnackbarProvider from 'layouts/SnackbarProvider';
import { Provider } from 'react-redux';
import store from 'redux/store';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  );
};

export default MyApp;
