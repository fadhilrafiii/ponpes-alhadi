import response from 'shared/utils/response';

export const errorHandlerMiddleware = (fn) => async (req, res) => {
  try {
    await fn(req, res);
  } catch (err) {
    return response(res, {
      status: err && err._original ? 422 : 500,
      message:
        err?.message ||
        'Suatu kesalahan terjadi! Kami sedang memperbaiki sistem, mohon coba kembali beberapa saat lagi!',
    });
  }
};
