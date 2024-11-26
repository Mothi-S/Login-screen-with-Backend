
import axios from 'axios';


const API_URL = 'http://10.0.2.2:3000'; // Use this for Android emulator

export const signup = async (username, email, password) => {
    try {
        console.log('Attempting to call signup endpoint:', `${API_URL}/signup`);
        console.log('Payload:', { username, email, password });
        
        const response = await axios.post(`${API_URL}/signup`, {
            username,
            email,
            password
        });
        
        console.log('Signup response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error in signup function:', error.response?.status, error.response?.data || error.message);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        console.log('Attempting to call login endpoint:', `${API_URL}/login`);
        console.log('Payload:', { email, password });
        
        // Sending login request
        const response = await axios.post(`${API_URL}/login`, { email, password });
        
        console.log('Login response:', response.data);
        return response.data;
    } catch (error) {
        // Log detailed error response
        console.error('Login error:', error.response?.status, error.response?.data || error.message);
        // If error response doesn't exist, log the error itself
        throw error;
    }
};

