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

export const logoutUser = async (refreshToken: string): Promise<void> => {
  try {
    await apiClient.post('/api/auth/logout', {refresh: refreshToken});
    // You can handle any additional logic post-logout here if needed
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

interface RegistrationResponse {
  id: number;
  username: string;
  email: string;
}

interface LoginResponse {
  refresh: string;
  access: string;
}

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

export const loginUser = async (
  username: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      'http://127.0.0.1:8000/api/token/',
      {username, password},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
