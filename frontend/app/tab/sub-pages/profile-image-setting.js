import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
 import Subtitle from '../../../components/general-use-components/subtitle';
 import ProfileImage from '../../../components/settings-components/profile-image';
 import ChangeProfileImage from '../../../components/settings-components/change-profile-image';

const ProfileImagePage = () => {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');

  const handleImageChange = (newImageUri) => {
    setProfileImage(newImageUri);
    // Handle the save action, e.g., upload the image to the server
    console.log('New Profile Image:', newImageUri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Subtitle title="Current Profile Image" />
      <ProfileImage uri={profileImage} />
      <ChangeProfileImage onImageChange={handleImageChange} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 20, // Add some padding to the top
  },
});

export default ProfileImagePage;