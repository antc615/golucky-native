import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import {styles} from '../styles/Messages.styles';
import HeaderComponent from './HeaderComponent';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

import image1 from '../assets/mock-feed-assets/mock-image5.png';
import image2 from '../assets/mock-feed-assets/mock-image6.png';
import image3 from '../assets/mock-feed-assets/mock-image4.png';
import {fetchMatches} from '../services/apiServices';
import {getAccessTokens} from '../utils/appUtils';

interface Image {
  id: number;
  image: string;
  uploaded_at: string;
  description: string | null;
  is_profile_picture: boolean;
  active: boolean;
}

interface MatchDetail {
  id: number;
  username: string;
  images: Image[];
}

interface Match {
  id: number;
  match_details: MatchDetail;
  matched_on: string;
  is_active: boolean;
}

const dummyData = [
  {
    id: '1',
    userName: 'User1',
    description: 'This is a short description of the message.',
    imageUrl: image1,
  },
  {
    id: '2',
    userName: 'User2',
    description: 'This is another message description.',
    imageUrl: image2,
  },
  {
    id: '3',
    userName: 'User3',
    description: 'More details about the message.',
    imageUrl: image3,
  },
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

const Messages: React.FC = () => {
  const navigation = useNavigation();
  const [isYourTurnCollapsed, setIsYourTurnCollapsed] = useState(false);
  const [isTheirTurnCollapsed, setIsTheirTurnCollapsed] = useState(false);
  const [isHiddenCollapsed, setIsHiddenCollapsed] = useState(false);
  const animatedHeightYourTurn = useState(new Animated.Value(1))[0];
  const animatedHeightTheirTurn = useState(new Animated.Value(1))[0];
  const animatedHeightHidden = useState(new Animated.Value(1))[0];
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const fetchAndSetMatches = async () => {
      try {
        const tokens = await getAccessTokens();
        if (tokens && tokens.accessToken) {
          const data = await fetchMatches(tokens.accessToken);
          setMatches(data);
        } else {
          console.error('No access token found');
        }
      } catch (error) {
        console.error('Failed to fetch matches', error);
      }
    };

    fetchAndSetMatches();
  }, []);

  const toggleSection = section => {
    let animatedHeight, setCollapsedState;

    switch (section) {
      case 'YourTurn':
        setCollapsedState = setIsYourTurnCollapsed;
        animatedHeight = animatedHeightYourTurn;
        break;
      case 'TheirTurn':
        setCollapsedState = setIsTheirTurnCollapsed;
        animatedHeight = animatedHeightTheirTurn;
        break;
      case 'Hidden':
        setCollapsedState = setIsHiddenCollapsed;
        animatedHeight = animatedHeightHidden;
        break;
      default:
        return;
    }

    setCollapsedState(prevState => {
      const newValue = !prevState;
      Animated.timing(animatedHeight, {
        toValue: newValue ? 0 : 1, // Toggle between collapsed and expanded
        duration: 300,
        useNativeDriver: false,
      }).start();
      return newValue;
    });
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => console.log('Start Game', data.item)}>
        <Text style={styles.backTextWhite}>Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => console.log('Chat', data.item)}>
        <Text style={styles.backTextWhite}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  const openChat = () => {
    navigation.navigate('ChatScreen');
  };

  const navigateToPublicProfile = () => {
    navigation.navigate('PublicProfile');
  };

  return (
    <>
      <HeaderComponent icons={[]} />
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>New Matches</Text>
        </View>

        <View style={styles.newMatchesContainer}>
          <FlatList
            horizontal
            data={matches}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={navigateToPublicProfile}>
                <View style={styles.matchItem}>
                  <Image
                    source={{
                      uri:
                        item.match_details.images[0]?.image ||
                        'default_image_url',
                    }}
                    style={styles.matchImage}
                  />
                  <Text style={styles.matchUsername}>
                    {item.match_details.username}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* <View style={styles.newMatchesContainer}>
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
        </View> */}

        {/* Your Turn Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Your Turn</Text>
          <TouchableOpacity onPress={() => toggleSection('YourTurn')}>
            <FontAwesomeIcon
              icon={isYourTurnCollapsed ? faChevronDown : faChevronUp}
              size={12}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            height: animatedHeightYourTurn.interpolate({
              inputRange: [0, 1],
              outputRange: [0, dummyData.length * 90],
            }),
            overflow: 'hidden',
          }}>
          <SwipeListView
            scrollEnabled={false}
            data={dummyData}
            renderItem={({item}) => (
              <View style={styles.rowFront}>
                <TouchableOpacity onPress={() => openChat(item)}>
                  <View style={styles.messageBlock}>
                    <Image source={item.imageUrl} style={styles.image} />
                    <View style={styles.textContainer}>
                      <Text style={styles.username}>{item.userName}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
          />
        </Animated.View>

        {/* Their Turn Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Their Turn</Text>
          <TouchableOpacity onPress={() => toggleSection('TheirTurn')}>
            <FontAwesomeIcon
              icon={isTheirTurnCollapsed ? faChevronDown : faChevronUp}
              size={12}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            height: animatedHeightTheirTurn.interpolate({
              inputRange: [0, 1],
              outputRange: [0, theirTurnMatchData.length * 90],
            }),
            overflow: 'hidden',
          }}>
          <SwipeListView
            scrollEnabled={false}
            data={theirTurnMatchData}
            renderItem={({item}) => (
              <View style={styles.rowFront}>
                <TouchableOpacity onPress={() => openChat(item)}>
                  <View style={styles.messageBlock}>
                    <Image source={item.imageUrl} style={styles.image} />
                    <View style={styles.textContainer}>
                      <Text style={styles.username}>{item.userName}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
          />
        </Animated.View>

        {/* Hidden Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hidden</Text>
          <TouchableOpacity onPress={() => toggleSection('Hidden')}>
            <FontAwesomeIcon
              icon={isHiddenCollapsed ? faChevronDown : faChevronUp}
              size={12}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            height: animatedHeightHidden.interpolate({
              inputRange: [0, 1],
              outputRange: [0, dummyData.length * 90],
            }),
            overflow: 'hidden',
          }}>
          <SwipeListView
            scrollEnabled={false}
            data={dummyData}
            renderItem={({item}) => (
              <View style={styles.rowFront}>
                <TouchableOpacity onPress={() => openChat(item)}>
                  <View style={styles.messageBlock}>
                    <Image source={item.imageUrl} style={styles.image} />
                    <View style={styles.textContainer}>
                      <Text style={styles.username}>{item.userName}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
          />
        </Animated.View>
      </ScrollView>
    </>
  );
};

export default Messages;
