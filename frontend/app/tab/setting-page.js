import { SafeAreaView, View, Text, Button } from "react-native";
import React from "react";
import { styles } from "../styles";

// import components
import Subtitle from "../../components/subtitle";
import SettingItem from "../../components/setting-item";
import LogoutButton from "../../components/logout-button";

export default function SettingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Subtitle title="Account Settings" />
      <SettingItem name="Username" />
      <SettingItem name="Change password" />
      <SettingItem name="Profile image" />
      <SettingItem name="Email" />
      <SettingItem name="Social" />
      <SettingItem name="Delete Account" />
      <Subtitle title="App Settings" />
      <SettingItem name="Notifications" />
      <SettingItem name="Dark Mode" />

      <View style={styles.center}>
        <LogoutButton />  
      </View>
    </SafeAreaView>
  );
}