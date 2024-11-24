import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Subtitle from '../../../components/general-use-components/subtitle';
import ProfileImage from '../../../components/settings-components/profile-image';
import ChangeProfileImage from '../../../components/settings-components/change-profile-image';
import withDarkMode from '../../../components/settings-components/with-dark-mode'; // Import the HOC
import { styles } from '../../styles'; // Import global styles

const ProfileImagePage = ({ isDarkMode }) => { // Receive isDarkMode as a prop
  const [profileImage, setProfileImage] = useState('https://example.com/profile.jpg');

  const handleImageChange = (newImageUri) => {
    setProfileImage(newImageUri);
    // Handle the save action, e.g., upload the image to the server
    console.log('New Profile Image:', newImageUri);
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Subtitle title="Current Profile Image" />
      <ProfileImage uri={profileImage} />
      <ChangeProfileImage onImageChange={handleImageChange} />
    </SafeAreaView>
  );
};

export default withDarkMode(ProfileImagePage);