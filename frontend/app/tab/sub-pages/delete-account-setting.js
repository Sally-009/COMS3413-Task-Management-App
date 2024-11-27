import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Subtitle from '../../../components/general-use-components/subtitle';
import DeleteAccountButton from '../../../components/settings-components/delete-account-button';
import { DarkModeProvider, useDarkMode } from '../../../components/settings-components/dark-mode-context';

function DeleteAccountPage() {
  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode(); // Destructure to get the dark mode state

  const handleDeleteAccount = () => {
    console.log('Account deleted');
    navigation.navigate('WelcomePage');
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Subtitle title="Delete Account" />
      <DeleteAccountButton currentPassword="hardcodedpassword" onDeleteAccount={handleDeleteAccount} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
});

const app = () => (
  <DarkModeProvider>
  <DeleteAccountPage />
  </DarkModeProvider>
);

export default app;