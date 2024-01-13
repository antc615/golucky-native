// UserProfile.tsx

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../styles/UserProfile.styles'; // Define your styles
import HeaderComponent from './HeaderComponent';

import {faEdit} from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome edit icon

import image1 from '../assets/mock-feed-assets/mock-image6.png';

const UserProfile: React.FC = () => {
  return (
    <>
      <HeaderComponent showIcons={true} />
      <ScrollView style={styles.container}>
        {/* New Profile Section */}
        <View style={styles.profileHeader}>
          <View style={styles.profilePicContainer}>
            <Image source={image1} style={styles.profilePic} />
            <TouchableOpacity style={styles.editButton}>
              <FontAwesomeIcon icon={faEdit} size={14} color="#808080" />
            </TouchableOpacity>
            <View style={styles.completionStatus}>
              <Text style={styles.completionText}>40% Complete</Text>
            </View>
          </View>
          <Text style={styles.profileName}>Caitlyn, 31</Text>
        </View>

        {/* Image Gallery */}
        <Text style={styles.photoUploadInstructions}>
          Tap on the camera icon to upload your photos.
        </Text>
        <View style={styles.imagesContainer}>
          {[...Array(9)].map((_, index) => (
            <TouchableOpacity key={index} style={styles.imagePlaceholder}>
              <FontAwesomeIcon icon={faCamera} size={20} color="#000" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default UserProfile;
