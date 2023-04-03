import axios from 'axios';

// create an axios instance (not mandatory)
const axiosClient = axios.create({
    baseURL: "/.netlify/functions/",
    // timeout:,
    // headers: {'':''}
});

export default axiosClient;