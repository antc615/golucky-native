import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import SnapCarousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';

import {styles} from '../styles/UserFeed.styles';

interface UserFeedProps {
  userName: string;
  profilePic: number; // Image require() returns a number
  postImages: number[]; // An array of numbers
}

interface PaginatorProps {
  postImages: number[];
  activeSlide: number;
}

const screenWidth = Dimensions.get('window').width;
const carouselItemWidth = screenWidth; // Adjust padding as needed

// Paginator
const Paginator: React.FC<PaginatorProps> = ({postImages, activeSlide}) => {
  return (
    <View style={styles.paginatorContainer}>
      {postImages.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginatorNode,
            activeSlide === index && styles.activeNode,
          ]}
        />
      ))}
    </View>
  );
};

const UserFeed: React.FC<UserFeedProps> = ({
  userName,
  profilePic,
  postImages,
}) => {
  const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide
  const likes = Math.floor(Math.random() * 100);

  return (
    <View style={styles.feedBlock}>
      <View style={styles.profileSection}>
        <Image source={profilePic} style={styles.profilePic} />
        <Text style={styles.userName}>{userName}</Text>
        <FontAwesomeIcon icon="ellipsis" size={24} color="black" />
      </View>
      <SnapCarousel
        data={postImages}
        renderItem={({item}) => (
          <Image source={item} style={styles.postImage} />
        )}
        sliderWidth={screenWidth}
        itemWidth={carouselItemWidth}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <View style={styles.iconsSection}>
        <View style={styles.iconsGroup}>
          <TouchableOpacity style={styles.icon}>
            <FontAwesomeIcon icon={['far', 'heart']} size={21} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesomeIcon
              icon={['far', 'comment']}
              size={21}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Paginator postImages={postImages} activeSlide={activeSlide} />
        <View style={styles.likesSection}>
          <Text>{likes} likes</Text>
        </View>
      </View>
    </View>
  );
};

export default UserFeed;
