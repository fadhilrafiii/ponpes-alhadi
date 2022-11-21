import { showSnackbar } from 'redux/slices/snackbar-slice';
import store from 'redux/store';

export const failedResponseInterceptor = (response) => {
  const { data } = response.response;
  store.dispatch(showSnackbar({ message: data.message, type: 'error' }));
  return data;
};
