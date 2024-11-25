import { View, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../styles";

// import components
import Subtitle from "../../components/general-use-components/subtitle";
import SettingItem from "../../components/settings-components/setting-item";
import LogoutButton from "../../components/settings-components/logout-button";
import { DarkModeProvider, useDarkMode } from '../../components/settings-components/dark-mode-context';

function SettingPage() {
  const { isDarkMode } = useDarkMode();

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Subtitle title="Account Settings" />
      <SettingItem name="Username" navigationTarget="UsernameSettingPage" />
      <SettingItem name="Change password" navigationTarget="PasswordSettingPage" />
      <SettingItem name="Profile image" navigationTarget="ProfileImagePage" />
      <SettingItem name="Email" navigationTarget="EmailSettingPage" />
      <SettingItem name="Delete Account" navigationTarget="DeleteAccountPage" />
      <Subtitle title="App Settings" />
      <SettingItem name="Notifications" navigationTarget="NotificationSettingPage" />
      <SettingItem name="Dark Mode" navigationTarget="DarkModePage" />

      <View style={styles.center}>
        <LogoutButton />  
      </View>
    </SafeAreaView>
  );
}

const App = () => (
  <DarkModeProvider>
    <SettingPage />
  </DarkModeProvider>
);

export default App;
