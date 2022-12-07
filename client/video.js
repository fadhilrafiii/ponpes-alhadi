import axios from 'client';

export const getVideos = (query = {}) => {
  const qs = new URLSearchParams(query);
  return axios.get(`/api/video?${qs}`);
};

export const updateVideos = (data) => {
  return axios.put('/api/video', data);
};
