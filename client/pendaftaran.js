import axios from 'client';

export const postPendaftaranAPI = (data) => axios.post('/api/form-pendaftaran', data);
