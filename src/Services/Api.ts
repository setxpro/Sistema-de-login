import axios from 'axios';
import { getUserLocalStorage } from '../Context/AuthProvider/util';


export const Api = axios.create({
    baseURL: 'https://reqres.in/api/',
});

Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage()
        
        config.headers = user?.token
        // config.headers.Authorization

        return config
    },

    (error) => Promise.reject(error)
)