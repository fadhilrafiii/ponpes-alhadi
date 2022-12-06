import { useCallback, useEffect } from 'react';

import { Provider } from 'react-redux';

import { getIpAddress } from 'client/ipAddress';
import { postPengunjung } from 'client/pengunjung';

import SnackbarProvider from 'shared/layouts/SnackbarProvider';
import store from 'shared/redux/store';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  const submitPengunjungData = useCallback(async () => {
    const { data } = await getIpAddress();
    await postPengunjung({ ip: data.ipAddress });
  }, []);

  useEffect(() => {
    submitPengunjungData();
  }, [submitPengunjungData]);

  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  );
};

export default MyApp;
