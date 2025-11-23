import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data: ' + error.message);
    }
};

export const postData = async (endpoint, data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
        return response.data;
    } catch (error) {
        throw new Error('Error posting data: ' + error.message);
    }
};