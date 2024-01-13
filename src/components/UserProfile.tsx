// UserProfile.tsx

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Switch,
  Image,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../styles/UserProfile.styles'; // Define your styles
import HeaderComponent from './HeaderComponent';
import {Picker} from '@react-native-picker/picker'; // Assuming you're using @react-native-picker/picker
import {faEdit} from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome edit icon
import image1 from '../assets/mock-feed-assets/mock-image6.png';

const UserProfile: React.FC = () => {
  // State examples for picker components
  const [pronouns, setPronouns] = useState('');
  const [zodiac, setZodiac] = useState('');
  const [education, setEducation] = useState('');
  const [personalityType, setPersonalityType] = useState('');
  const [loveStyle, setLoveStyle] = useState('');
  const [showAge, setShowAge] = useState(true);
  const [showDistance, setShowDistance] = useState(true);
  const [orientation, setOrientation] = useState('');

  return (
    <>
      <HeaderComponent showIcons={true} />
      <ScrollView style={styles.container}>
        {/* New Profile Section */}
        <View style={styles.profileHeader}>
          <View style={styles.profilePicContainer}>
            <Image source={image1} style={styles.profilePic} />
            <TouchableOpacity style={styles.editButton}>
              <FontAwesomeIcon icon={faEdit} size={14} color="#808080" />
            </TouchableOpacity>
            <View style={styles.completionStatus}>
              <Text style={styles.completionText}>40% Complete</Text>
            </View>
          </View>
          <Text style={styles.profileName}>Caitlyn, 31</Text>
        </View>

        {/* Image Gallery */}
        <Text style={styles.photoUploadInstructions}>
          Tap on the camera icon to upload your photos.
        </Text>
        <View style={styles.imagesContainer}>
          {[...Array(9)].map((_, index) => (
            <TouchableOpacity key={index} style={styles.imagePlaceholder}>
              <FontAwesomeIcon icon={faCamera} size={20} color="#000" />
            </TouchableOpacity>
          ))}
        </View>

        {/* User Info section */}
        {/* Pronouns Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Pronouns *</Text>
          <Picker
            selectedValue={pronouns}
            onValueChange={itemValue => setPronouns(itemValue)}
            style={styles.picker}>
            <Picker.Item label="He/Him" value="he/him" />
            <Picker.Item label="She/Her" value="she/her" />
            <Picker.Item label="They/Them" value="they/them" />
            {/* Additional options */}
          </Picker>
        </View>

        {/* Zodiac Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Zodiac *</Text>
          <Picker
            selectedValue={zodiac}
            onValueChange={itemValue => setZodiac(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Aries" value="aries" />
            <Picker.Item label="Taurus" value="taurus" />
            {/* ... other zodiac signs ... */}
          </Picker>
        </View>

        {/* Control Profile Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Control your profile</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Don't show my age</Text>
            <Switch onValueChange={setShowAge} value={showAge} />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Don't show my distance</Text>
            <Switch onValueChange={setShowDistance} value={showDistance} />
          </View>
        </View>

        {/* About Me Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>About Me *</Text>
          <TextInput
            style={styles.input}
            placeholder="Tell us about yourself"
            multiline
          />
        </View>

        {/* Relationship Goals Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Relationship Goals</Text>
          <TextInput
            style={styles.input}
            placeholder="What are you looking for?"
          />
        </View>

        {/* Relationship Type Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Relationship Type</Text>
          <TextInput style={styles.input} placeholder="Type of relationship" />
        </View>

        {/* Languages I Know Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Languages I Know</Text>
          <TextInput style={styles.input} placeholder="Languages you speak" />
        </View>

        {/* Basics Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Basics</Text>
          <View style={styles.subSection}>
            <Text style={styles.subInputHeader}>Education</Text>
            <TextInput style={styles.input} placeholder="Your education" />
            <TouchableOpacity style={styles.addLabel}>
              <Text style={styles.addLabelText}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subSection}>
            <Text style={styles.subInputHeader}>Personality Type</Text>
            <TextInput
              style={styles.input}
              placeholder="Your personality type"
            />
            <TouchableOpacity style={styles.addLabel}>
              <Text style={styles.addLabelText}>Add</Text>
            </TouchableOpacity>
          </View>
          {/* Continue with other sub-sections in 'Basics'... */}
        </View>

        {/* Job Title Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Job Title *</Text>
          <TextInput style={styles.input} placeholder="Your job title" />
        </View>

        {/* Company Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Company</Text>
          <TextInput style={styles.input} placeholder="Company you work at" />
        </View>

        {/* School Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>School</Text>
          <TextInput style={styles.input} placeholder="School you attended" />
        </View>

        {/* Location Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Location *</Text>
          <TextInput style={styles.input} placeholder="Your current location" />
        </View>

        {/* Sexual Orientation Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Sexual Orientation</Text>
          <Picker
            selectedValue={orientation}
            onValueChange={itemValue => setOrientation(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Straight" value="straight" />
            <Picker.Item label="Gay" value="gay" />
            <Picker.Item label="Bisexual" value="bisexual" />
            {/* Additional options */}
          </Picker>
        </View>

        {/* Age Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Age *</Text>
          <TextInput
            style={styles.input}
            placeholder="Your age"
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default UserProfile;
