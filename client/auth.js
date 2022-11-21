import axios from '../Client';

export const postLoginSantriAPI = (loginData) => axios.post('/api/login-santri', loginData);
