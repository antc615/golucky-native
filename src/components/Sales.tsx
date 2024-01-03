import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {styles} from '../styles/Sales.styles';
import HeaderComponent from './HeaderComponent';

const screenWidth = Dimensions.get('window').width;

const SalesComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState('Best Value');

  const plans = [
    {name: 'Best Value', duration: '12 Months', price: '$4.99 / month'},
    {name: 'Popular', duration: '6 Months', price: '$5.99 / month'},
    {name: 'Standard', duration: '1 Month', price: '$7.99 / month'},
  ];

  const features = [
    'Unlimited Likes',
    'Rewind your last swipe',
    '5 Super Likes a day',
    '1 Boost a month',
    'Passport to swipe around the world',
    'No ads',
    'See who Likes You',
    'Top Picks',
    'Priority Likes',
    'Message before matching',
  ];

  interface Plan {
    name: string;
    duration: string;
    price: string;
  }

  const renderPlanItem = ({item}: {item: Plan}): JSX.Element => {
    const isActivePlan = item.name === selectedPlan;
    return (
      <TouchableOpacity
        style={[styles.planCard, isActivePlan ? styles.activePlanCard : null]}
        onPress={() => setSelectedPlan(item.name)}>
        <Text
          style={[
            styles.planName,
            isActivePlan ? styles.activePlanName : null,
          ]}>
          {item.name}
        </Text>
        <Text style={styles.planDuration}>{item.duration}</Text>
        <Text style={styles.planPrice}>{item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <HeaderComponent showIcons={false} />
      <ScrollView style={styles.container}>
        <View style={styles.messageSection}>
          <Text>
            See who liked you and match with them instantly with GoLucky
            platinum.
          </Text>
        </View>

        <View style={styles.planSection}>
          <Text style={styles.selectPlanText}>Select a plan</Text>
          <SnapCarousel
            data={plans}
            renderItem={renderPlanItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth * 0.8}
          />
        </View>

        <View style={styles.disclaimerSection}>
          <Text>
            Free monthly boost only available for 1 month or longer
            subscriptions.
          </Text>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.featuresHeader}>
            Included with GoLucky Platinum
          </Text>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <FontAwesomeIcon
                icon={['far', 'check-circle']}
                size={14}
                color="black"
              />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        <View style={styles.summarySection}>
          <Text style={styles.summaryText}>
            You have selected: {selectedPlan}
          </Text>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default SalesComponent;
