import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

export default UserFeed;
