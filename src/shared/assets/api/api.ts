import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage/localStorage';

export const axiosClient = axios.create({
    baseURL: __API_URL__,
});

axiosClient.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';
    }
    return config;
});
