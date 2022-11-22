import axios from '../client';

export const postLoginSantriAPI = (loginData, config = {}) =>
  axios.post('/api/login-santri', loginData, config);
export const getAuthenticateAPI = (config) => axios.get('/api/me', config);
