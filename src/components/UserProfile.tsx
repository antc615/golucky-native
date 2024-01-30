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
import {styles} from '../styles/UserProfile.styles';
import HeaderComponent from './HeaderComponent';
import {Picker} from '@react-native-picker/picker';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/mock-feed-assets/mock-image6.png';

const UserProfile: React.FC = () => {
  // State hooks for each field
  const [pronouns, setPronouns] = useState('');
  const [zodiac, setZodiac] = useState('');
  const [relationshipGoals, setRelationshipGoals] = useState('');
  const [languages, setLanguages] = useState('');
  const [education, setEducation] = useState('');
  const [personalityType, setPersonalityType] = useState('');
  const [loveStyle, setLoveStyle] = useState('');
  const [relationshipType, setRelationshipType] = useState('');
  const [pets, setPets] = useState('');
  const [drinking, setDrinking] = useState('');
  const [smoking, setSmoking] = useState('');
  const [cannabis, setCannabis] = useState('');
  const [workout, setWorkout] = useState('');
  const [dietaryPreferences, setDietaryPreferences] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [school, setSchool] = useState('');
  const [location, setLocation] = useState('');
  const [sexualOrientation, setSexualOrientation] = useState('');
  const [showAge, setShowAge] = useState(true);
  const [showDistance, setShowDistance] = useState(true);
  const [aboutMe, setAboutMe] = useState('');
  const [age, setAge] = useState('');

  return (
    <>
      <HeaderComponent icons={['cog']} />
      <ScrollView style={styles.container}>
        {/*************************** Header Profile section *********************************/}
        <View style={styles.profileHeader}>
          <View style={styles.profilePicContainer}>
            <Image source={image1} style={styles.profilePic} />
            <TouchableOpacity style={styles.editButton}>
              <FontAwesomeIcon
                icon={['far', 'edit']}
                size={14}
                color="#808080"
              />
            </TouchableOpacity>
            <View style={styles.completionStatus}>
              <Text style={styles.completionText}>40% Complete</Text>
            </View>
          </View>
          <Text style={styles.profileName}>Caitlyn, 31</Text>
        </View>

        {/*************************** Image Gallery section *********************************/}
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

        {/*************************** User Info section *********************************/}
        {/* Age Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Age *</Text>
          <TextInput
            style={styles.input}
            placeholder="Your age"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
        </View>

        {/* Job Title Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Job Title *</Text>
          <TextInput
            style={styles.input}
            placeholder="Your job title"
            value={jobTitle}
            onChangeText={setJobTitle}
          />
        </View>

        {/* Company Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Company</Text>
          <TextInput
            style={styles.input}
            placeholder="Company you work at"
            value={company}
            onChangeText={setCompany}
          />
        </View>

        {/* School Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>School</Text>
          <TextInput
            style={styles.input}
            placeholder="School you attended"
            value={school}
            onChangeText={setSchool}
          />
        </View>

        {/* Location Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Location *</Text>
          <TextInput
            style={styles.input}
            placeholder="Your current location"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        {/* Education Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Education</Text>
          <TextInput
            style={styles.input}
            placeholder="Your education"
            value={education}
            onChangeText={setEducation}
          />
        </View>

        {/* Personality Type Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Personality Type</Text>
          <TextInput
            style={styles.input}
            placeholder="Your personality type"
            value={personalityType}
            onChangeText={setPersonalityType}
          />
        </View>

        {/* Love Style Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Love Style</Text>
          <TextInput
            style={styles.input}
            placeholder="Describe your love style"
            value={loveStyle}
            onChangeText={setLoveStyle}
          />
        </View>

        {/* Relationship Type Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Relationship Type</Text>
          <TextInput
            style={styles.input}
            placeholder="Type of relationship"
            value={relationshipType}
            onChangeText={setRelationshipType}
          />
        </View>

        {/* Pets Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Pets</Text>
          <TextInput
            style={styles.input}
            placeholder="Do you have pets?"
            value={pets}
            onChangeText={setPets}
          />
        </View>

        {/* Drinking Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Drinking</Text>
          <TextInput
            style={styles.input}
            placeholder="Your drinking habits"
            value={drinking}
            onChangeText={setDrinking}
          />
        </View>

        {/* Smoking Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Smoking</Text>
          <TextInput
            style={styles.input}
            placeholder="Your smoking habits"
            value={smoking}
            onChangeText={setSmoking}
          />
        </View>

        {/* Cannabis Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Cannabis</Text>
          <TextInput
            style={styles.input}
            placeholder="Your cannabis use"
            value={cannabis}
            onChangeText={setCannabis}
          />
        </View>

        {/* Workout Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Workout</Text>
          <TextInput
            style={styles.input}
            placeholder="Your workout routine"
            value={workout}
            onChangeText={setWorkout}
          />
        </View>

        {/* Dietary Preferences Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Dietary Preferences</Text>
          <TextInput
            style={styles.input}
            placeholder="Your dietary preferences"
            value={dietaryPreferences}
            onChangeText={setDietaryPreferences}
          />
        </View>

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
            <Picker.Item label="Gemini" value="aries" />
            <Picker.Item label="Taurus" value="aries" />
          </Picker>
        </View>

        {/* About Me Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>About Me *</Text>
          <TextInput
            style={styles.input}
            placeholder="Tell us about yourself"
            multiline
            value={aboutMe}
            onChangeText={setAboutMe}
          />
        </View>

        {/* Relationship Goals Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Relationship Goals</Text>
          <TextInput
            style={styles.input}
            placeholder="What are you looking for?"
            value={relationshipGoals}
            onChangeText={setRelationshipGoals}
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
          <TextInput
            style={styles.input}
            placeholder="Languages you speak"
            value={languages}
            onChangeText={setLanguages}
          />
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
            selectedValue={sexualOrientation}
            onValueChange={itemValue => setSexualOrientation(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Straight" value="straight" />
            <Picker.Item label="Gay" value="gay" />
            <Picker.Item label="Bisexual" value="bisexual" />
            {/* Additional options */}
          </Picker>
        </View>

        {/* Lifestyle Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputHeader}>Lifestyle</Text>
          {/* Repeat the pattern used in 'Basics' for each subcategory */}
          <View style={styles.subSection}>
            <Text style={styles.subInputHeader}>Pets</Text>
            <TextInput style={styles.input} placeholder="Your pets" />
            <TouchableOpacity style={styles.addLabel}>
              <Text style={styles.addLabelText}>Add</Text>
            </TouchableOpacity>
          </View>
          {/* Add other subcategories like Drinking, Smoking, etc., in the same pattern */}
        </View>

        {/* Control Your Profile Section */}
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
      </ScrollView>
    </>
  );
};

export default UserProfile;
