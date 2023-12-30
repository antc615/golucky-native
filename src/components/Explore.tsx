// Explore.tsx

import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import {styles} from '../styles/Explore.styles'; // Adjust the path as needed

const PlaceholderText = ({text}: {text: string}) => (
  <Text style={styles.overlayText}>{text}</Text>
);

const Explore: React.FC = () => {
  //   const PlaceholderText = ({text}: {text: string}) => (
  //     <Text style={styles.overlayText}>{text}</Text>
  //   );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Explore</Text>

      <ImageBackground
        source={require('../assets/maclogo.png')}
        style={styles.fullWidthImage}>
        <PlaceholderText text="Discover" />
      </ImageBackground>

      <View style={styles.row}>
        <ImageBackground
          source={require('../assets/maclogo.png')}
          style={styles.halfWidthImage}>
          <PlaceholderText text="Meet People" />
        </ImageBackground>
        <ImageBackground
          source={require('../assets/maclogo.png')}
          style={styles.halfWidthImage}>
          <PlaceholderText text="Connect" />
        </ImageBackground>
      </View>

      {/* Repeat the row for more half-width images */}
      <View style={styles.row}>
        <ImageBackground
          source={require('../assets/maclogo.png')}
          style={styles.halfWidthImage}>
          <PlaceholderText text="Meet People" />
        </ImageBackground>
        <ImageBackground
          source={require('../assets/maclogo.png')}
          style={styles.halfWidthImage}>
          <PlaceholderText text="Connect" />
        </ImageBackground>
      </View>

      <ImageBackground
        source={require('../assets/maclogo.png')}
        style={styles.fullWidthImage}>
        <PlaceholderText text="Find Your Match" />
      </ImageBackground>

      <Text style={styles.header}>Find out</Text>

      {/* Repeat the content from steps 1-5 */}
      <ImageBackground
        source={require('../assets/maclogo.png')}
        style={styles.fullWidthImage}>
        <PlaceholderText text="Discover Love" />
      </ImageBackground>

      <View style={styles.row}>
        <ImageBackground
          source={require('../assets/maclogo.png')}
          style={styles.halfWidthImage}>
          <PlaceholderText text="Meet People" />
        </ImageBackground>
        <ImageBackground
          source={require('../assets/maclogo.png')}
          style={styles.halfWidthImage}>
          <PlaceholderText text="Connect" />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Explore;
