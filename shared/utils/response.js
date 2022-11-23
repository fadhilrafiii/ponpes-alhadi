const response = (res, { message = '', status = 200, data, detail }) => {
  const payload = {
    message,
    data,
    status,
    success: Math.floor(status / 100) === 2,
    detail,
  };

  return res.status(status).json(payload);
};

export default response;
