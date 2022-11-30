import axios from 'client';

export const uploadFile = (file) => {
  const data = new FormData();
  data.append('file', file);

  return axios.post('/api/upload-file', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
