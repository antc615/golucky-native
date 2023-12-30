import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {styles} from '../styles/UserFeed.styles';

interface UserFeedProps {
  userName: string;
  profilePic: string;
  postImage: string;
  // Add other props here if needed
}

const UserFeed: React.FC<UserFeedProps> = ({
  userName,
  profilePic,
  postImage,
}) => {
  return (
    <View style={styles.feedBlock}>
      <View style={styles.profileSection}>
        <Image source={{uri: profilePic}} style={styles.profilePic} />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image source={{uri: postImage}} style={styles.postImage} />
      <View style={styles.iconsSection}>
        <TouchableOpacity>
          <FontAwesomeIcon icon="thumbs-up" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon="heart" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon="comment" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserFeed;
