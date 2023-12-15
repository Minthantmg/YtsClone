import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://yts.mx/api/v2/",
})
