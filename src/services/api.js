import axios from 'axios';

const BACKEND_URL = `https://www.cbr-xml-daily.ru/archive`;

export const createApi = (onFailedLoad) => {
  const api = axios.create({
    baseURL: BACKEND_URL
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    onFailedLoad();
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};