import { showSnackbar } from 'shared/redux/slices/snackbar-slice';
import store from 'shared/redux/store';

export const failedResponseInterceptor = (response) => {
  const { data = {} } = response.response || {};
  if (data.status === 401 || data.status === 302) return data;

  store.dispatch(
    showSnackbar({
      message:
        data.status === 500
          ? 'Suatu kesalahan terjadi! Kami sedang memperbaiki sistem, mohon coba kembali beberapa saat lagi!'
          : data.message ||
            'Suatu kesalahan terjadi! Kami sedang memperbaiki sistem, mohon coba kembali beberapa saat lagi!',
      type: 'error',
    }),
  );
  return data;
};
