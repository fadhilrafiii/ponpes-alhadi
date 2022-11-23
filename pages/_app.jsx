import { Provider } from 'react-redux';

import SnackbarProvider from 'shared/layouts/SnackbarProvider';
import store from 'shared/redux/store';

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
