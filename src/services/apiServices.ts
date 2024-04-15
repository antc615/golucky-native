import axios, {AxiosResponse} from 'axios';
import {RegistrationResponse, AuthResponse} from '../types/apiResponses';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Base64} from 'js-base64';

// ************ CONSTANTS **************************
const API_BASE_URL = 'http://127.0.0.1:8000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface Image {
  id: number;
  image: string;
  uploaded_at: string;
  description: string | null;
  is_profile_picture: boolean;
  active: boolean;
}

interface MatchDetail {
  id: number;
  username: string;
  images: Image[];
}

interface Match {
  id: number;
  match_details: MatchDetail;
  matched_on: string;
  is_active: boolean;
}

// ************ BEGIN UTILITY **************************
apiClient.interceptors.request.use(
  // Request Interceptor for Proactive Token Refresh
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

function decodeJWT(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const payload = JSON.parse(Base64.decode(base64));
  return payload;
}

// ************ BEGIN API CALLS ****************************************************
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

export const fetchUserProfile = async (accessToken: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/profile/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

/**
 * Marks an image as inactive.
 */
export const markImageAsInactive = async (accessToken, imageId) => {
  console.error(
    `Request URL: ${API_BASE_URL}/api/images/${imageId}/mark-inactive/`,
  );

  try {
    const response = await axios({
      method: 'patch',
      url: `${API_BASE_URL}/api/images/${imageId}/mark-inactive/`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Image marked as inactive successfully', response.data);
    return response.data;
  } catch (error) {
    console.error('Error marking image as inactive:', error.response || error);
    throw error;
  }
};

// Add a new likeUser function
export const likeUser = async (userId, accessToken) => {
  try {
    console.error('NUMBER', userId);
    const response = await apiClient.post(
      '/matches/swipes/',
      {swiped: userId, direction: 'like'},
      {headers: {Authorization: `Bearer ${accessToken}`}},
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error sending like:',
      error.response ? error.response.data : error,
    );
    throw error;
  }
};

// Add a new dislikeUser function
export const dislikeUser = async (userId, accessToken) => {
  try {
    console.error('DISLIKED');
    const response = await apiClient.post(
      '/matches/swipes/',
      {swiped: userId, direction: 'dislike'},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error sending dislike:', error);
    throw error;
  }
};

// Add to the API services file
export const fetchMatches = async (accessToken: string): Promise<Match[]> => {
  try {
    const response = await apiClient.get('/matches/matches/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }
};
