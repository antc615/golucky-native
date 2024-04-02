import React from 'react';
import {Modal, View, Text, Image, TouchableOpacity} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {styles} from '../styles/MatchNotification.styles';

interface MatchNotificationProps {
  visible: boolean;
  userName: string;
  profilePic: string;
  onClose: () => void;
  onChat: () => void;
}

const MatchNotification: React.FC<MatchNotificationProps> = ({
  visible,
  userName,
  profilePic,
  onClose,
  onChat,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.matchContainer}>
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={styles.matchCard}>
          <Text style={styles.matchHeaderText}>It's a Match!</Text>
          <Image source={{uri: profilePic}} style={styles.matchProfilePic} />
          <Text style={styles.matchText}>
            You and {userName} have liked each other.
          </Text>
          <View style={styles.matchButtonsContainer}>
            <TouchableOpacity style={styles.matchButton} onPress={onChat}>
              <Text style={styles.matchButtonText}>Start Chatting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.matchButton} onPress={onClose}>
              <Text style={styles.matchButtonText}>Keep Swiping</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default MatchNotification;
