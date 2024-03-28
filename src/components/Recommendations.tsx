import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../styles/Recommendations.styles';

// Dummy images
import image1 from '../assets/mock-feed-assets/mock-image5.png';
import image2 from '../assets/mock-feed-assets/mock-image6.png';
import image3 from '../assets/mock-feed-assets/mock-image4.png';

interface Profile {
  id: number;
  userName: string;
  profilePic: any;
  isVerified: boolean;
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

const dummyProfiles = [
  {
    id: 1,
    userName: 'Alex Doe',
    profilePic: image1,
    isVerified: true,
    age: 29,
    location: 'New York',
    height: '5\'9"',
    biography: 'Loves hiking and outdoor adventures.',
    education: 'BSc Computer Science',
    occupation: 'Software Developer',
    zodiacSign: 'Virgo',
    interests: 'Hiking, Coding, Reading',
    lookingFor: 'Serious Relationship',
  },
  {
    id: 2,
    userName: 'Jamie Smith',
    profilePic: image2,
    isVerified: false,
    age: 25,
    location: 'Los Angeles',
    height: '5\'6"',
    biography: 'Aspiring writer and full-time dreamer.',
    education: 'BA English Literature',
    occupation: 'Content Writer',
    zodiacSign: 'Pisces',
    interests: 'Writing, Sketching, Yoga',
    lookingFor: 'Friendship',
  },
  {
    id: 3,
    userName: 'Chris Johnson',
    profilePic: image3,
    isVerified: true,
    age: 32,
    location: 'Chicago',
    height: '6\'0"',
    biography: 'Tech enthusiast and nature explorer.',
    education: 'MS Electrical Engineering',
    occupation: 'Electrical Engineer',
    zodiacSign: 'Aries',
    interests: 'Technology, Mountain Biking, Photography',
    lookingFor: 'Networking',
  },
];

const Recommendations: React.FC = () => {
  const renderItem = ({item}: {item: Profile}) => (
    <View style={styles.profileCard}>
      <Image source={item.profilePic} style={styles.profilePic} />
      <View style={styles.profileInfo}>
        <Text style={styles.userName}>{item.userName}</Text>
        {item.isVerified && (
          <FontAwesomeIcon
            icon={faCheckCircle}
            size={16}
            color="#4CAF50"
            style={styles.verifiedIcon}
          />
        )}
        <Text
          style={
            styles.userDetails
          }>{`${item.age}, ${item.location}, ${item.height}`}</Text>
        <Text style={styles.bioAndMore}>{`Biography: ${item.biography}`}</Text>
        <Text style={styles.bioAndMore}>{`Education: ${item.education}`}</Text>
        <Text
          style={styles.bioAndMore}>{`Occupation: ${item.occupation}`}</Text>
        <Text
          style={styles.bioAndMore}>{`Zodiac Sign: ${item.zodiacSign}`}</Text>
        <Text style={styles.bioAndMore}>{`Interests: ${item.interests}`}</Text>
        <Text
          style={styles.bioAndMore}>{`Looking For: ${item.lookingFor}`}</Text>
        <Text style={styles.userBiography}>{item.biography}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={dummyProfiles}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.container}
    />
  );
};

export default Recommendations;
