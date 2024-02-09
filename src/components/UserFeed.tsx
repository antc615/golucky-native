// UserFeed.tsx
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import SnapCarousel from 'react-native-snap-carousel';
import {styles} from '../styles/UserFeed.styles';

type StackParams = {
  PublicProfile: undefined; // Adjust based on your navigation setup
};

// Inside UserFeed.tsx
interface UserFeedProps {
  userName: string;
  profilePic: string; // URL as string
  postImages: string[]; // Array of image URLs
  isVerified: boolean;
}

const screenWidth = Dimensions.get('window').width;

const Paginator: React.FC<{
  postImages: {url: string}[];
  activeSlide: number;
}> = ({postImages, activeSlide}) => (
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

const UserFeed: React.FC<UserFeedProps> = ({
  userName,
  profilePic,
  postImages,
  isVerified,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const likes = Math.floor(Math.random() * 100);

  return (
    <View style={styles.feedBlock}>
      <View style={styles.profileSection}>
        <TouchableOpacity>
          <Image source={{uri: profilePic}} style={styles.profilePic} />
        </TouchableOpacity>
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
        <FontAwesomeIcon
          icon="ellipsis"
          size={16}
          color="#949494"
          style={styles.ellipsisIcon}
        />
      </View>
      <SnapCarousel
        data={postImages}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.postImage} />
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
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
