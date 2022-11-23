import { Router } from 'next/router';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectClientState,
  setClientLoading,
  setIsClientReady,
} from 'shared/redux/slices/client-state-slice';

export const useClient = () => {
  const dispatch = useDispatch();
  const { isClientReady, isClientLoading } = useSelector(selectClientState);

  useEffect(() => {
    const start = () => {
      console.log('Start Error Fetching Page from Server Side');
      dispatch(setClientLoading(true));
    };
    const end = () => {
      console.log('Finished Fetching Page from Server Side');
      dispatch(setClientLoading(false));
      setIsClientReady(true);
    };

    const error = () => {
      console.log('Error Fetching Page from Server Side');
      dispatch(setClientLoading(false));
      setIsClientReady(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', error);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', error);
    };
  }, [dispatch]);

  return {
    isClientReady,
    isClientLoading,
  };
};
