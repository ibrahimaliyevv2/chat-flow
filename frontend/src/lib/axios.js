import axios from "axios";

const API_BASE_URL = import.meta.env.MODE === "development" ? import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}/api`
    : 'http://localhost:5001/api' : '/api';

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true // sending cookies in every request
})