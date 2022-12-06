import axios from 'axios';

export const getHasilPendaftaranAPI = (query) => {
  const qs = new URLSearchParams(query);
  return axios.get(`/api/hasil-pendaftaran?${qs}`);
};
