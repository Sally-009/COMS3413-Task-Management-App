import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Subtitle from '../../../components/subtitle';
import ProfileImage from '../../../components/profile-image';
import ChangeProfileImage from '../../../components/change-profile-image';
import { styles } from '../../styles';

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

export default ProfileImagePage;