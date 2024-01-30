import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {logoutUser} from '../services/apiServices.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountSettings: React.FC = () => {
  const handleLogout = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (refreshToken) {
        await logoutUser(refreshToken);
      }
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('refreshToken');
      // Navigate to the login screen or splash screen after logout
      navigation.navigate('SplashScreen');
    } catch (e) {
      console.error('Logout error', e);
      // Handle logout error
    }
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Account Settings</Text>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => {
          handleLogout();
        }}>
        <Text style={styles.optionText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => {
          /* Handle deactivate account logic */
        }}>
        <Text style={styles.optionText}>Deactivate Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f8',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#007bff',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    width: '80%',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  optionText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AccountSettings;
