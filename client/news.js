import axios from 'client';

export const createNews = (data) => axios.post('/api/news', data);
export const getNews = (query) => {
  const qs = new URLSearchParams(query);
  return axios.get(`/api/news?${qs}`);
};
export const getNewsDetail = (title) => {
  return axios.get(`/api/news/${title}`);
};
