// FeedContainer.tsx
import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import UserFeed from './UserFeed';
import HeaderComponent from './HeaderComponent';
import {styles} from '../styles/FeedContainer.styles';
import {fetchMatchRecommendations} from '../services/apiServices';
import {getAccessTokens} from '../utils/appUtils'; // Adjust the import path as necessary

const FeedContainer: React.FC = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
          />
        ))}
      </ScrollView>
    </>
  );
};

export default FeedContainer;
