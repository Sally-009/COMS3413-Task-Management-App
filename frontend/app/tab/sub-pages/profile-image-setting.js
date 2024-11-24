import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
 import Subtitle from '../../../components/general-use-components/subtitle';
 import ProfileImage from '../../../components/settings-components/profile-image';
 import ChangeProfileImage from '../../../components/settings-components/change-profile-image';

const ProfileImagePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email Setting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfileImagePage;