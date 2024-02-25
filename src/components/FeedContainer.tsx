// FeedContainer.tsx
import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import UserFeed from './UserFeed';
import HeaderComponent from './HeaderComponent';
import {styles} from '../styles/FeedContainer.styles';
import {fetchMatchRecommendations} from '../services/apiServices';
import {getAccessTokens} from '../utils/appUtils';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface Image {
  url: string;
  is_profile_image: boolean;
  description: string | null;
}

interface Recommendation {
  userName: string;
  firstName: string;
  lastName: string;
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

export type RootParamList = {
  PublicProfile: undefined;
};

export type StackParams = {
  PublicProfile: undefined;
};

interface RecommendationsArray extends Array<Recommendation> {}

const FeedContainer: React.FC = () => {
  const [recommendations, setRecommendations] = useState<RecommendationsArray>(
    [],
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigation =
    useNavigation<StackNavigationProp<RootParamList, 'PublicProfile'>>();

  useEffect(() => {
    const loadRecommendations = async () => {
      setIsLoading(true);
      try {
        const tokens = await getAccessTokens();
        if (tokens?.accessToken) {
          const data = await fetchMatchRecommendations(tokens.accessToken);

          console.error('data', data);
          // Assuming the response structure matches your example
          setRecommendations(data.recommendations || []);
        } else {
          throw new Error('No access token available');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load recommendations.');
      } finally {
        setIsLoading(false);
      }
    };

    loadRecommendations();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <>
      <HeaderComponent icons={['bars', 'bell']} />
      <ScrollView style={styles.container}>
        {recommendations.map((item, index) => (
          <UserFeed
            key={index} // Consider using a unique ID if available
            userName={`${item.firstName} ${item.lastName[0]}.`} // Adjust according to your data structure
            profilePic={
              item.images.find(img => img.is_profile_image)?.url ||
              'defaultProfilePicURL' // Adjust default URL as necessary
            }
            postImages={item.images.map(img => img.url)}
            isVerified={item.isVerified}
            navigation={navigation}
            age={item.age}
            location={item.location}
            height={item.height}
            biography={item.biography}
            education={item.education}
            occupation={item.occupation}
            zodiacSign={item.zodiacSign}
            interests={item.interests}
            lookingFor={item.lookingFor}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default FeedContainer;
