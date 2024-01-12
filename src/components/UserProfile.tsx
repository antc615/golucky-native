import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faVideo} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../styles/UserProfile.styles'; // Assuming styles are in this file

import image1 from '../assets/mock-feed-assets/mock-image5.png';
import image2 from '../assets/mock-feed-assets/mock-image6.png';
import image3 from '../assets/mock-feed-assets/mock-image4.png';
import image4 from '../assets/mock-feed-assets/mock-image7.png';
import image5 from '../assets/mock-feed-assets/mock-image8.png';
import image6 from '../assets/mock-feed-assets/mock-image9.png';
import image7 from '../assets/mock-feed-assets/mock-image1.png';

const dummyUserData = {
  profilePic: image2, // Replace with actual path
  posts: 120,
  followers: 350,
  following: 250,
  firstName: 'John',
  aboutMe: {
    location: 'New York, USA',
    age: 27,
    job: 'Artist',
    hobbies: 'Photography, Hiking',
    description: 'A short bio goes here...',
  },
  photos: [image1, image3, image4],
  videos: [image5, image6, image7],
};

const UserProfile: React.FC = () => {
  const [isAboutMeExpanded, setIsAboutMeExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('photos'); // 'photos' or 'videos'

  const toggleAboutMe = () => setIsAboutMeExpanded(!isAboutMeExpanded);
  const setActiveTabToPhotos = () => setActiveTab('photos');
  const setActiveTabToVideos = () => setActiveTab('videos');

  const renderGalleryItems = () => {
    const items =
      activeTab === 'photos' ? dummyUserData.photos : dummyUserData.videos;
    return items.map((item, index) => (
      <Image
        key={`${activeTab}-${index}`}
        source={item}
        style={styles.galleryItem}
      />
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {/* User Info Section */}
      <View style={styles.userInfoSection}>
        <Image source={dummyUserData.profilePic} style={styles.profilePic} />
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{dummyUserData.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{dummyUserData.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{dummyUserData.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
      {/* About Me Section */}
      <View style={styles.aboutMe}>
        <Text style={styles.firstName}>{dummyUserData.firstName}</Text>
        {isAboutMeExpanded && (
          <View>
            <Text>{`Location: ${dummyUserData.aboutMe.location}`}</Text>
            <Text>{`Age: ${dummyUserData.aboutMe.age}`}</Text>
            <Text>{`Job: ${dummyUserData.aboutMe.job}`}</Text>
            <Text>{`Hobbies: ${dummyUserData.aboutMe.hobbies}`}</Text>
            <Text>{dummyUserData.aboutMe.description}</Text>
          </View>
        )}
        <TouchableOpacity onPress={toggleAboutMe}>
          <Text style={styles.seeMore}>
            {isAboutMeExpanded ? 'Collapse' : 'See More'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Action Buttons Section */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={activeTab === 'follow' ? styles.activeButton : styles.button}>
          <Text
            style={
              activeTab === 'follow'
                ? styles.activeButtonText
                : styles.buttonText
            }>
            Follow
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={setActiveTabToPhotos}
          style={activeTab === 'photos' ? styles.activeButton : styles.button}>
          <Text
            style={
              activeTab === 'photos'
                ? styles.activeButtonText
                : styles.buttonText
            }>
            Pictures
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={setActiveTabToVideos}
          style={activeTab === 'videos' ? styles.activeButton : styles.button}>
          <Text
            style={
              activeTab === 'videos'
                ? styles.activeButtonText
                : styles.buttonText
            }>
            Message
          </Text>
        </TouchableOpacity>
      </View>

      {/* Gallery Section */}
      <View style={styles.gallery}>
        <View style={styles.tabBar}>
          <TouchableOpacity onPress={setActiveTabToPhotos}>
            <FontAwesomeIcon
              icon={faCamera}
              size={24}
              color={activeTab === 'photos' ? '#000' : '#ccc'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={setActiveTabToVideos}>
            <FontAwesomeIcon
              icon={faVideo}
              size={24}
              color={activeTab === 'videos' ? '#000' : '#ccc'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.galleryContent}>{renderGalleryItems()}</View>
      </View>
    </ScrollView>
  );
};

export default UserProfile;
