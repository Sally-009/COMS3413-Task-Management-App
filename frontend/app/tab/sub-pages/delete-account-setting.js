import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Subtitle from '../../../components/general-use-components/subtitle';
import DeleteAccountButton from '../../../components/settings-components/delete-account-button';
import withDarkMode from '../../../components/settings-components/with-dark-mode'; // Import the HOC
import { styles } from '../../styles'; // Import global styles
import { DarkModeProvider, useDarkMode } from '../../../components/settings-components/dark-mode-context'; // Import the DarkModeProvider and useDarkMode hook

function DeleteAccountPage() { // Receive isDarkMode as a prop
  const navigation = useNavigation();
  const isDarkMode = useDarkMode(); // Use the isDarkMode hook

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
const App = () => (
  <DarkModeProvider>
    <DeleteAccountPage />
  </DarkModeProvider>
);

export default App;