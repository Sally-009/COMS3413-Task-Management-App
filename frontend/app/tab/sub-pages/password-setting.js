import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import UserInfo from '../../../components/settings-components/user-info';
import InputFieldSetting from '../../../components/settings-components/input-field-setting';
import Subtitle from '../../../components/general-use-components/subtitle';
import ViewPasswordButton from '../../../components/settings-components/view-password';
import { styles } from '../../styles';

const PasswordSettingPage = () => {
  const [password, setPassword] = useState('password');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSavePassword = (newPassword) => {
    setPassword(newPassword);
    setIsPasswordVisible(false); // Hide the password after saving
    // Handle the save action, e.g., update the state or make an API call
    console.log('New Password:', newPassword);
  };

  const handlePasswordVisible = () => {
    setIsPasswordVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Subtitle title="Current Password" />
      <UserInfo value={isPasswordVisible ? password : '********'} />
      <ViewPasswordButton currentPassword="password" onPasswordVisible={handlePasswordVisible} />
      <Subtitle title="New Password" />
      <InputFieldSetting
        placeholder="Enter new password"
        onSave={handleSavePassword}
      />
    </SafeAreaView>
  );
};

export default PasswordSettingPage;