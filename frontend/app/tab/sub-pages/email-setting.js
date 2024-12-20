import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import UserInfo from '../../../components/settings-components/user-info';
import InputFieldSetting from '../../../components/settings-components/input-field-setting';
import Subtitle from '../../../components/general-use-components/subtitle';
import withDarkMode from '../../../components/settings-components/with-dark-mode'; // Import the HOC
import { styles } from '../../styles';
import { DarkModeProvider, useDarkMode } from '../../../components/settings-components/dark-mode-context';


const EmailSettingPage = () => { // Receive isDarkMode as a prop
  const [email, setEmail] = useState('john.doe@example.com');
  const { isDarkMode } = useDarkMode();

  const handleSaveEmail = (newEmail) => {
    setEmail(newEmail);
    // Handle the save action, e.g., update the state or make an API call
    console.log('New Email:', newEmail);
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Subtitle title="Current Email" />
      <UserInfo value={email} />
      <Subtitle title="New Email" />
      <InputFieldSetting
        placeholder="Enter new email"
        onSave={handleSaveEmail}
      />
    </SafeAreaView>
  );
};

const App = () => (
  <DarkModeProvider>
    <EmailSettingPage />
  </DarkModeProvider>
);

export default App;