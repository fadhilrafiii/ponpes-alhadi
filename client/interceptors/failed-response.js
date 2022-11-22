import { showSnackbar } from 'redux/slices/snackbar-slice';
import store from 'redux/store';

export const failedResponseInterceptor = (response) => {
  const { data = {} } = response.response || {};
  store.dispatch(
    showSnackbar({
      message:
        data.message ||
        'Suatu kesalahan terjadi! Kami sedang memperbaiki sistem, mohon coba kembali beberapa saat lagi!',
      type: 'error',
    }),
  );
  return data;
};
