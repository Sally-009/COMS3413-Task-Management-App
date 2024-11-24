import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Subtitle from '../../../components/general-use-components/subtitle';
import DeleteAccountButton from '../../../components/settings-components/delete-account-button';

const DeleteAccountPage = () => {
  const navigation = useNavigation();

  const handleDeleteAccount = () => {
    // Handle the delete action, e.g., make an API call to delete the account
    console.log('Account deleted');
    // Navigate back to the welcome page
    navigation.navigate('WelcomePage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Subtitle title="Delete Account" />
      <DeleteAccountButton currentPassword="hardcodedpassword" onDeleteAccount={handleDeleteAccount} />
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

export default DeleteAccountPage;