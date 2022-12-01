import response from 'shared/utils/response';

export const errorHandlerMiddleware = (fn) => async (req, res) => {
  try {
    await fn(req, res);
  } catch (err) {
    let error;

    if (err.name === 'ValidationError') {
      error = {
        _original: true,
        message: err.details[0]?.message,
      };
    } else if (err instanceof Error) {
      error = JSON.parse(typeof err?.message === 'object' ? err?.message : '{}');
    } else error = err;

    return response(res, {
      status: error && error._original ? 422 : 500,
      message:
        error?.message ||
        'Suatu kesalahan terjadi! Kami sedang memperbaiki sistem, mohon coba kembali beberapa saat lagi!',
    });
  }
};
