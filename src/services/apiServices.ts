import axios, {AxiosResponse} from 'axios';
import {RegistrationResponse, AuthResponse} from '../types/apiResponses';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Base64} from 'js-base64';

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

// Adjust the parameter types as needed based on your actual form data and API requirements
export const updateUserProfile = async (
  accessToken: string,
  profileData: {
    firstName: string;
    lastName: string;
    location: string;
    occupation: string;
    age: string;
  },
) => {
  const url = 'http://127.0.0.1:8000/api/profile/';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.patch(url, profileData, {headers});
    console.log('Profile update successful', response.data);
    // Optionally return something here, e.g., response data
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error.response || error);
    throw error; // Rethrow to handle it in the calling function
  }
};

// Adjust the parameter types as needed based on your actual form data and API requirements
export const updatePhoneNumber = async (
  accessToken: string,
  profileData: {
    phone_number: string;
  },
) => {
  const url = 'http://127.0.0.1:8000/api/profile/';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.patch(url, profileData, {headers});
    console.log('Profile update successful', response.data);
    // Optionally return something here, e.g., response data
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error.response || error);
    throw error; // Rethrow to handle it in the calling function
  }
};

// Assuming you have a function to get the auth token, adjust the types as needed
export const uploadImage = async (file, accessToken) => {
  const formData = new FormData();
  formData.append('file', {
    uri: file.uri,
    type: file.type,
    name: file.name,
  });

  try {
    const response = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/profile/upload-image-authenticated',
      data: formData,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const fetchMatchRecommendations = async (
  accessToken: string,
): Promise<any> => {
  try {
    const response: AxiosResponse = await apiClient.get(
      '/matches/match-recommendations/',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching match recommendations:', error);
    throw error;
  }
};

// Request Interceptor for Proactive Token Refresh
apiClient.interceptors.request.use(
  async config => {
    // Attempt to retrieve the access token from storage
    const accessToken = await AsyncStorage.getItem('accessToken');

    // Proceed only if an access token exists
    if (accessToken) {
      const {exp} = decodeJWT(accessToken);
      const currentTime = Date.now() / 1000;

      // Check if the token is about to expire
      if (exp < currentTime + 30) {
        try {
          // Attempt to refresh the token
          const newAccessToken = await refreshToken();
          config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        } catch (error) {
          // Handle errors (e.g., refresh token expired or network issues)
          console.error('Error refreshing token:', error);
          // Optional: Redirect to login or perform other error handling
        }
      } else {
        // If the token is not about to expire, use it as is
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
    }

    // For requests without an access token (e.g., login, registration),
    // no Authorization header is added, and the request proceeds as normal
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Assuming refreshToken() is already correctly updating AsyncStorage:
async function refreshToken() {
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  const response = await axios.post(`${API_BASE_URL}/api/token/refresh/`, {
    refresh: refreshToken,
  });
  const {access, refresh} = response.data;

  // Update AsyncStorage with the new tokens for future requests
  await AsyncStorage.setItem('accessToken', access);
  if (refresh) {
    await AsyncStorage.setItem('refreshToken', refresh);
  }
  return access; // Return the new access token to update the Authorization header
}

function decodeJWT(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const payload = JSON.parse(Base64.decode(base64));
  return payload;
}
