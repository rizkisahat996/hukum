// api/law.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // Replace with your API URL

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/api/laws'); // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};