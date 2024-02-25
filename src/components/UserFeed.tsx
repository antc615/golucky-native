// UserFeed.tsx
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import SnapCarousel from 'react-native-snap-carousel';
import {styles} from '../styles/UserFeed.styles';
import {StackNavigationProp} from '@react-navigation/stack';

type StackParams = {
  PublicProfile: undefined;
};

// Inside UserFeed.tsx
interface UserFeedProps {
  userName: string;
  profilePic: string;
  postImages: string[];
  isVerified: boolean;
  navigation: StackNavigationProp<StackParams, 'PublicProfile'>;
  age: number;
  location: string;
  height: string;
  biography: string;
  education: string;
  occupation: string;
  zodiacSign: string;
  interests: string;
  lookingFor: string;
}
// interface UserFeedProps {
//   userName: string;
//   profilePic: string;
//   postImages: string[];
//   isVerified: boolean;
//   navigation: StackNavigationProp<StackParams, 'PublicProfile'>;
// }

const screenWidth = Dimensions.get('window').width;
const carouselHeight = Dimensions.get('window').height * 0.6;

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
  navigation,
  age,
  location,
  height,
  biography,
  education,
  occupation,
  zodiacSign,
  interests,
  lookingFor,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const likes = Math.floor(Math.random() * 100);

  const navigateToPublicProfile = () => {
    console.log('Navigating to PublicProfile');
    navigation.navigate('PublicProfile');
  };

  return (
    <View style={styles.feedBlock}>
      {/* <View style={styles.profileSection}>
        <TouchableOpacity onPress={navigateToPublicProfile}>
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
      </View> */}
      <SnapCarousel
        data={postImages}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={[styles.postImage, {height: carouselHeight}]}
          />
        )}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
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
          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
        </View>
      </View>
      {/* Additional User Details Section {likes} likes*/}
      <View style={styles.additionalInfoSection}>
        {/* User Header Block */}
        <View>
          <Text style={styles.userName}>
            <Text style={{fontStyle: 'italic'}}>{userName.split(' ')[0]}</Text>
            {` ${userName.split(' ')[1][0]}.`}
          </Text>
          <Text style={styles.userSubText}>
            {`${age} ${location} ${height}`}
          </Text>
        </View>

        {/* Biography */}
        <DetailRow icon="user" label="About Me" value={biography} />

        {/* Education */}
        <DetailRow icon="graduation-cap" label="Education" value={education} />

        {/* Occupation */}
        <DetailRow icon="briefcase" label="Occupation" value={occupation} />

        {/* Zodiac Sign */}
        <DetailRow icon="star" label="Zodiac Sign" value={zodiacSign} />

        {/* Interests */}
        <DetailRow icon="heart" label="Interests" value={interests} />

        {/* Looking For */}
        <DetailRow icon="search" label="Looking For" value={lookingFor} />
      </View>
    </View>
  );
};

// Define a mapping from labels to FontAwesome icon names
const iconMap = {
  'About Me': 'user',
  Education: 'graduation-cap',
  Occupation: 'briefcase',
  'Zodiac Sign': 'star',
  Interests: 'heart',
  'Looking For': 'search',
};

const DetailRow: React.FC<{
  label: string;
  value: string;
}> = ({label, value}) => {
  const icon = iconMap[label] || 'info-circle'; // Fallback to a generic icon

  return (
    <View style={styles.detailRow}>
      <FontAwesomeIcon
        icon={['fas', icon]}
        size={18}
        style={styles.iconStyle}
      />
      <Text style={styles.detailLabel}>
        {label}:<Text style={styles.detailValue}> {value}</Text>
      </Text>
    </View>
  );
};

export default UserFeed;
