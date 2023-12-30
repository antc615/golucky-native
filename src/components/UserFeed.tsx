import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';

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
          <FontAwesomeIcon icon={faThumbsUp} size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faHeart} size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faComment} size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserFeed;
