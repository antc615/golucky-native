import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import SnapCarousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import {styles} from '../styles/UserFeed.styles';
import {StackNavigationProp} from '@react-navigation/stack';

// Define your Stack Params based on your navigation setup
type StackParams = {
  PublicProfile: undefined; // Add other screen params as needed
};

interface UserFeedProps {
  userName: string;
  profilePic: number;
  postImages: number[];
  isVerified: boolean;
  navigation: StackNavigationProp<StackParams, 'PublicProfile'>;
}

interface UserFeedProps {
  userName: string;
  profilePic: number;
  postImages: number[];
  isVerified: boolean;
}

interface PaginatorProps {
  postImages: number[];
  activeSlide: number;
}

const screenWidth = Dimensions.get('window').width;
const carouselItemWidth = screenWidth; // * 0.8 - Adjust padding as needed

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
  isVerified,
  navigation,
}) => {
  const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide
  const likes = Math.floor(Math.random() * 100);

  const navigateToPublicProfile = () => {
    navigation.navigate('PublicProfile');
  };

  return (
    <View style={styles.feedBlock}>
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={navigateToPublicProfile}>
          <Image source={profilePic} style={styles.profilePic} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToPublicProfile}
          style={styles.userNameContainer}>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{userName}</Text>
            {isVerified && (
              <FontAwesomeIcon
                icon={['fas', 'check-circle']}
                size={12}
                color="#4892f3"
                style={styles.verifiedIcon}
              />
            )}
          </View>
        </TouchableOpacity>
        <View>
          <FontAwesomeIcon
            icon="ellipsis"
            size={16}
            color="#949494"
            style={styles.ellipsisIcon}
          />
        </View>
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
