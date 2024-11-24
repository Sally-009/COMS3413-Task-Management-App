import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Subtitle from '../../../components/general-use-components/subtitle';
import DeleteAccountButton from '../../../components/settings-components/delete-account-button';
import withDarkMode from '../../../components/settings-components/with-dark-mode'; // Import the HOC
import { styles } from '../../styles'; // Import global styles

function DeleteAccountPage({ isDarkMode }) { // Receive isDarkMode as a prop
  const navigation = useNavigation();

  const handleDeleteAccount = () => {
    // Handle the delete action, e.g., make an API call to delete the account
    console.log('Account deleted');
    // Navigate back to the welcome page
    navigation.navigate('WelcomePage');
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Subtitle title="Delete Account" />
      <DeleteAccountButton currentPassword="hardcodedpassword" onDeleteAccount={handleDeleteAccount} />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 20, // Add some padding to the top
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
});

export default withDarkMode(DeleteAccountPage);