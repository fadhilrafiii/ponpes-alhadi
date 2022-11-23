import { authenticate } from 'middlewares/authenticate';

const { default: response } = require('shared/utils/response');

const handler = (req, res) => {
  return response(res, { status: 200, message: 'Hello World!' });
};

export default authenticate(handler);
