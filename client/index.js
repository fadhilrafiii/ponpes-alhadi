import Axios from 'axios';

import { failedResponseInterceptor } from './interceptors/failed-response';
import { successResponseInterceptor } from './interceptors/success-response';

const axios = Axios.create();
axios.defaults.baseURL = process.env.NEXT_URL;
axios.interceptors.response.use(successResponseInterceptor, failedResponseInterceptor);

export default axios;
