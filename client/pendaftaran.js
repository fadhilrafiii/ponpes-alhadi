import axios from 'client';

import dayjs from 'shared/utils/datetime';

export const postPendaftaranAPI = (data) => axios.post('/api/form-pendaftaran', data);

export const getHasilPendaftaranAPI = (query) => {
  const qs = new URLSearchParams(query);
  return axios.get(`/api/hasil-pendaftaran?${qs}`);
};

export const downloadHasilPendaftaranAPI = () => {
  return axios.get('/api/download-pendaftaran', { responseType: 'blob' }).then((blob) => {
    // Create blob link to download
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `Pendaftar Ponpes AlHadi-${dayjs().format('DD-MM-YYYY HH:mm')}.xlsx`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);

    URL.revokeObjectURL(url);
  });
};
