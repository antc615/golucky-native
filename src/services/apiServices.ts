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
export const uploadImage = async (imageUri: string, accessToken: string) => {
  const formData = new FormData();
  formData.append('image_url', imageUri);
  formData.append('description', 'description'); // Set description to null
  formData.append('is_profile_picture', 'false'); // Set isProfilePicture to false

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
