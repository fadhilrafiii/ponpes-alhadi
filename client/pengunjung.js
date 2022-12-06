import axios from 'client';

import { cleanObject } from 'shared/utils/object';

export const postPengunjung = (data) => axios.post('/api/pengunjung', data);
export const getPengunjung = (query) => {
  const querystring = new URLSearchParams(cleanObject(query)).toString();
  return axios.get(`/api/pengunjung?${querystring}`);
};

export const getPengunjungSummary = () => {
  return axios.get('/api/pengunjung-summary');
};
