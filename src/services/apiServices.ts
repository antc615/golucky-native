import axios, {AxiosResponse} from 'axios';
import {RegistrationResponse, AuthResponse} from '../types/apiResponses';

const API_BASE_URL = 'http://127.0.0.1:8000'; // Replace with your actual base URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authenticateUser = async (
  username: string,
  password: string,
): Promise<AuthResponse> => {
  try {
    const response: AxiosResponse<AuthResponse> = await apiClient.post(
      '/api/token/',
      {username, password},
    );
    return response.data;
  } catch (error) {
    console.error('Authentication error:', error);
    // You can throw a custom error or the original error based on your error handling strategy
    throw error;
  }
};

export const registerAndLogin = async (
  username: string,
  email: string,
  password: string,
): Promise<AuthResponse> => {
  try {
    const response: AxiosResponse<AuthResponse> = await apiClient.post(
      '/api/auth/registerLogin/',
      {username, email, password},
    );
    return response.data;
  } catch (error) {
    console.error('Authentication error:', error);
    // You can throw a custom error or the original error based on your error handling strategy
    throw error;
  }
};

export const logoutUser = async (refreshToken: string): Promise<void> => {
  try {
    await apiClient.post('/api/auth/logout', {refresh: refreshToken});
    // You can handle any additional logic post-logout here if needed
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

export const registerUser = async (
  username: string,
  email: string,
  password: string,
): Promise<RegistrationResponse> => {
  try {
    const response: AxiosResponse<RegistrationResponse> = await axios.post(
      'http://127.0.0.1:8000/api/auth/register',
      {username, email, password},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};
