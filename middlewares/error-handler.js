import response from 'shared/utils/response';

export const errorHandlerMiddleware = (fn) => async (req, res) => {
  try {
    await fn(req, res);
  } catch (err) {
    console.log(err);
    let error;
    // if (err instanceof Error) {
    //   error = JSON.parse(err.message);
    // } else error = err;

    return response(res, {
      status: error && error._original ? 422 : 500,
      message:
        error?.message ||
        'Suatu kesalahan terjadi! Kami sedang memperbaiki sistem, mohon coba kembali beberapa saat lagi!',
    });
  }
};
