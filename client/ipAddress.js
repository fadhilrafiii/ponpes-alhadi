import axios from 'axios';

export const getIpAddress = () => axios.get('https://api.db-ip.com/v2/free/self');
