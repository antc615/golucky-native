import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  SplashScreen: undefined;
  UserFeed: undefined;
  // ... other routes
};

type UserFeedNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UserFeed'
>;

interface UserFeedProps {
  navigation: UserFeedNavigationProp;
  route: RouteProp<RootStackParamList, 'UserFeed'>;
  userName: string;
  profilePic: string;
  postImage: string;
  // Add other props here if needed
}

const UserFeed: React.FC<UserFeedProps> = ({
  navigation,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
  userName,
  profilePic,
  postImage,
}) => {
  return (
    <View style={styles.feedBlock}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('SplashScreen')}>
        <Text style={styles.backButtonText}>Back to Splash</Text>
      </TouchableOpacity>
      <View style={styles.profileSection}>
        <Image source={{uri: profilePic}} style={styles.profilePic} />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image source={{uri: postImage}} style={styles.postImage} />
      <View style={styles.iconsSection}>
        <TouchableOpacity>
          <FontAwesome name="thumbs-up" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="heart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="comment" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedBlock: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    // Add additional styling for shadow, borders etc.
  },
  backButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    // Other styling for the back button
  },
  backButtonText: {
    color: 'white',
    // Other styling for the button text
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // Add additional styling
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    // Add additional styling
  },
  postImage: {
    width: '100%',
    height: 200,
    // Add additional styling
  },
  iconsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    // Add additional styling
  },
});

export default UserFeed;
