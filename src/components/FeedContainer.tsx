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
  username: string;
  images: Image[];
  isVerified: boolean;
}

export type RootParamList = {
  PublicProfile: undefined; // Add other screens as necessary
};

export type StackParams = {
  // If you have different stacks, define their params here, including PublicProfile if it's part of a specific stack
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
        {recommendations.map(item => (
          <UserFeed
            key={item.username} // Assuming usernames are unique
            userName={item.username}
            profilePic={
              item.images.find(img => img.is_profile_image)?.url ||
              'defaultProfilePicURL'
            } // Fallback URL if needed
            postImages={item.images.map(img => img.url)} // Adjust based on your actual data structure
            isVerified={item.isVerified} // Assuming this is part of your data
            navigation={navigation} // Assuming 'navigation' is available in this scope
          />
        ))}
      </ScrollView>
    </>
  );
};

export default FeedContainer;
