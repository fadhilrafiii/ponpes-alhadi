const response = (res, { message = '', status = 200, data, detail }) => {
  const payload = {
    message,
    data,
    status,
    success: !(Math.floor(status / 100) === 4 || Math.floor(status / 100) === 5),
    detail,
  };

  return res.status(status).json(payload);
};

export default response;
