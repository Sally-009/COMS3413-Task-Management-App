import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import UserInfo from '../../../components/settings-components/user-info';
import InputFieldSetting from '../../../components/settings-components/input-field-setting';
import Subtitle from '../../../components/general-use-components/subtitle';
import withDarkMode from '../../../components/settings-components/with-dark-mode'; // Import the HOC
import { styles } from '../../styles';

const UsernameSettingPage = ({ isDarkMode }) => { // Receive isDarkMode as a prop
  const [username, setUsername] = useState('JohnDoe');

  const handleSaveUsername = (newUsername) => {
    setUsername(newUsername);
    // Handle the save action, e.g., update the state or make an API call
    console.log('New Username:', newUsername);
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Subtitle title="Current Username" />
      <UserInfo label="Username" value={username} />
      <Subtitle title="New Username" />
      <InputFieldSetting
        label="New Username"
        placeholder="Enter new username"
        onSave={handleSaveUsername}
      />
    </SafeAreaView>
  );
};

export default withDarkMode(UsernameSettingPage);