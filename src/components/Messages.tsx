// Messages.tsx
import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from '..//styles/Messages.styles.ts';
import HeaderComponent from './HeaderComponent';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

import image1 from '../assets/mock-feed-assets/mock-image5.png';
import image2 from '../assets/mock-feed-assets/mock-image6.png';
import image3 from '../assets/mock-feed-assets/mock-image4.png';

const dummyData = [
  {
    id: '1',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: image1,
  },
  {
    id: '',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: image2,
  },
  {
    id: '3',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: image3,
  },
  // Add more dummy data as needed
];

const newMatchesData = [
  {id: '1', userName: 'Alice', imageUrl: image1},
  {id: '2', userName: 'Bob', imageUrl: image2},
  {id: '3', userName: 'Charlie', imageUrl: image3},
  {id: '4', userName: 'Ashley', imageUrl: image1},
  {id: '5', userName: 'Stephanie', imageUrl: image2},
  {id: '6', userName: 'Rose', imageUrl: image3},
  {id: '7', userName: 'Alice', imageUrl: image1},
];

const theirTurnMatchData = [
  {id: '8', userName: 'Alice', imageUrl: image1},
  {id: '9', userName: 'Bob', imageUrl: image2},
  {id: '10', userName: 'Charlie', imageUrl: image3},
  {id: '11', userName: 'Ashley', imageUrl: image1},
  {id: '12', userName: 'Stephanie', imageUrl: image2},
  {id: '13', userName: 'Rose', imageUrl: image3},
  {id: '14', userName: 'Alice', imageUrl: image1},
];

// const NewMatches: React.FC = () => (
//   <View style={styles.newMatchesContainer}>
//     <FlatList
//       horizontal
//       data={newMatchesData}
//       keyExtractor={item => item.id}
//       renderItem={({item}) => (
//         <TouchableOpacity onPress={navigateToPublicProfile}>
//           <View style={styles.matchItem}>
//             <Image source={item.imageUrl} style={styles.matchImage} />
//             <Text style={styles.matchUsername}>{item.userName}</Text>
//           </View>
//         </TouchableOpacity>
//       )}
//       showsHorizontalScrollIndicator={false}
//     />
//   </View>
// );

const Messages: React.FC = () => {
  const navigation = useNavigation();
  const [isCollapsed, setIsCollapsed] = useState(false); // List is expanded by default
  const [isTheirTurnCollapsed, setIsTheirTurnCollapsed] = useState(false); // "Their Turn" is expanded by default
  const [isHiddenCollapsed, setIsHiddenCollapsed] = useState(false); // "Hidden" is expanded by default

  // Toggle function
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleTheirTurnCollapse = () =>
    setIsTheirTurnCollapsed(!isTheirTurnCollapsed);
  const toggleHiddenCollapse = () => setIsHiddenCollapsed(!isHiddenCollapsed);

  const openChat = () => {
    navigation.navigate('ChatScreen'); // Add any parameters if needed
  };

  const navigateToPublicProfile = () => {
    navigation.navigate('PublicProfile'); // Add any parameters if needed
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => initiateGame(data.item)}>
        <Text style={styles.backTextWhite}>Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => startChat(data.item)}>
        <Text style={styles.backTextWhite}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  const initiateGame = item => {
    // Logic to initiate game
  };

  const startChat = item => {
    // Logic to start chat
  };

  return (
    <>
      <HeaderComponent icons={[]} />
      <ScrollView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Matches</Text>
        </View>

        {/* <NewMatches /> */}
        <View style={styles.newMatchesContainer}>
          <FlatList
            horizontal
            data={newMatchesData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={navigateToPublicProfile}>
                <View style={styles.matchItem}>
                  <Image source={item.imageUrl} style={styles.matchImage} />
                  <Text style={styles.matchUsername}>{item.userName}</Text>
                </View>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Your Turn</Text>
          <TouchableOpacity
            onPress={toggleCollapse}
            style={styles.collapseButton}>
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronDown : faChevronUp}
              size={12}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        {!isCollapsed && (
          <SwipeListView
            data={dummyData}
            renderItem={(data, rowMap) => (
              <View style={styles.rowFront}>
                <TouchableOpacity
                  onPress={() => openChat(data.item.userName)}
                  style={styles.messageBlock}>
                  <Image source={data.item.imageUrl} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.username}>{data.item.userName}</Text>
                    <Text style={styles.description}>
                      {data.item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        )}

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Their Turn</Text>
          <TouchableOpacity onPress={toggleTheirTurnCollapse}>
            <FontAwesomeIcon
              icon={isTheirTurnCollapsed ? faChevronDown : faChevronUp}
              size={12}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        {!isTheirTurnCollapsed && (
          <SwipeListView
            data={dummyData}
            renderItem={(data, rowMap) => (
              <View style={styles.rowFront}>
                <TouchableOpacity
                  onPress={() => openChat(data.item.userName)}
                  style={styles.messageBlock}>
                  <Image source={data.item.imageUrl} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.username}>{data.item.userName}</Text>
                    <Text style={styles.description}>
                      {data.item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        )}

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hidden</Text>
          <TouchableOpacity onPress={toggleHiddenCollapse}>
            <FontAwesomeIcon
              icon={isHiddenCollapsed ? faChevronDown : faChevronUp}
              size={12}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        {!isHiddenCollapsed && (
          <SwipeListView
            data={dummyData}
            renderItem={(data, rowMap) => (
              <View style={styles.rowFront}>
                <TouchableOpacity
                  onPress={() => openChat(data.item.userName)}
                  style={styles.messageBlock}>
                  <Image source={data.item.imageUrl} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.username}>{data.item.userName}</Text>
                    <Text style={styles.description}>
                      {data.item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        )}
      </ScrollView>
    </>
  );
};

export default Messages;
