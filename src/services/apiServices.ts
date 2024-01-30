import axios, {AxiosResponse} from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000'; // Replace with your actual base URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface AuthResponse {
  refresh: string;
  access: string;
}

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