import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {styles} from '../styles/Notifications.styles';

import image1 from '../assets/mock-feed-assets/mock-image1.png';
import image2 from '../assets/mock-feed-assets/mock-image2.png';
import image3 from '../assets/mock-feed-assets/mock-image3.png';
import image4 from '../assets/mock-feed-assets/mock-image4.png';
import image5 from '../assets/mock-feed-assets/mock-image5.png';

const NotificationsComponent = () => {
  const likedMessages = [
    {
      id: 1,
      userName: 'John Doe',
      userImg: image1,
      message: 'Great post!',
    },
    {
      id: 2,
      userName: 'Jane Smith',
      userImg: image2,
      message: 'Loved this!',
    },
  ];

  const likedPhotos = [
    {
      id: 1,
      photo: image3,
      userName: 'Emily Davis',
      userImg: image4,
      others: 5,
    },
    {
      id: 2,
      photo: require('../assets/mock-feed-assets/mock-image1.png'),
      userName: 'Michael Brown',
      userImg: require('../assets/mock-feed-assets/mock-image1.png'),
      others: 3,
    },
  ];

  const commentedPhotos = [
    {
      id: 1,
      photo: image5,
      userName: 'Lisa Ray',
      userImg: image5,
      comment: 'Awesome photo!',
    },
    {
      id: 2,
      photo: require('../assets/mock-feed-assets/mock-image1.png'),
      userName: 'Kevin Green',
      userImg: require('../assets/mock-feed-assets/mock-image1.png'),
      comment: 'Really cool!',
    },
  ];

  const historyItems = [
    {id: 1, content: 'You liked a photo by Amy', date: '2021-07-16'},
    {id: 2, content: 'Mike commented on your photo', date: '2021-07-15'},
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        {likedMessages.map(msg => (
          <View key={msg.id} style={styles.row}>
            <Image source={msg.userImg} style={styles.profilePic} />
            <View style={styles.content}>
              <Text style={styles.userName}>{msg.userName}</Text>
              <Text style={styles.text}>{msg.message}</Text>
              <View style={styles.icons}>
                <TouchableOpacity style={styles.icon}>
                  <FontAwesomeIcon icon={['far', 'thumbs-up']} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                  <FontAwesomeIcon icon={['far', 'comment-alt']} size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        {likedPhotos.map(item => (
          <View key={item.id} style={styles.row}>
            <Image source={item.photo} style={styles.photo} />
            <View style={styles.content}>
              <Image source={item.userImg} style={styles.profilePic} />
              <Text style={styles.text}>
                {item.userName} and {item.others} others liked this photo
              </Text>
              <View style={styles.icons}>
                <TouchableOpacity style={styles.icon}>
                  <FontAwesomeIcon icon={['far', 'thumbs-up']} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                  <FontAwesomeIcon icon={['far', 'comment-alt']} size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        {commentedPhotos.map(item => (
          <View key={item.id} style={styles.row}>
            <Image source={item.photo} style={styles.photo} />
            <View style={styles.commentRow}>
              <Image source={item.userImg} style={styles.profilePic} />
              <View style={styles.commentTextContainer}>
                <Text style={styles.userName}>{item.userName}</Text>
                <Text style={styles.commentText}>{item.comment}</Text>
              </View>
              <View style={styles.icons}>
                <TouchableOpacity style={styles.icon}>
                  <FontAwesomeIcon icon={['far', 'thumbs-up']} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                  <FontAwesomeIcon icon={['far', 'comment-alt']} size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        {historyItems.map(item => (
          <View key={item.id} style={styles.row}>
            <Text style={styles.text}>{item.content}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default NotificationsComponent;
