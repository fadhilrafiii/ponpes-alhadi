import axios from '../client';

export const postLoginSantriAPI = (loginData) => axios.post('/api/login-santri', loginData);
