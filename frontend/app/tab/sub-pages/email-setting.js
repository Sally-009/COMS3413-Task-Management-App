import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import UserInfo from '../../../components/settings-components/user-info';
import InputFieldSetting from '../../../components/settings-components/input-field-setting';
import Subtitle from '../../../components/general-use-components/subtitle';
import { styles } from '../../styles';

const EmailSettingPage = () => {
  const [email, setEmail] = useState('john.doe@example.com');

  const handleSaveEmail = (newEmail) => {
    setEmail(newEmail);
    // Handle the save action, e.g., update the state or make an API call
    console.log('New Email:', newEmail);
  };

  return (
    <SafeAreaView style={styles.container}>
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

export default EmailSettingPage;