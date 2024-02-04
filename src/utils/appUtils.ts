import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTokens = async (
  access: string,
  refresh: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem('accessToken', access);
    await AsyncStorage.setItem('refreshToken', refresh);
  } catch (e) {
    console.error('Storing tokens error', e);
  }
};

export const getAccessTokens = async (): Promise<
  {accessToken: string | null; refreshToken: string | null} | undefined
> => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    return {accessToken, refreshToken};
  } catch (e) {
    console.error('Error retrieving tokens', e);
    // Optionally, return undefined or throw an error based on your error handling strategy
    return undefined;
  }
};
