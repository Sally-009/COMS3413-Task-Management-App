import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import { styles } from "../styles";

// import components
import Subtitle from "../../components/subtitle";

export default function SettingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Subtitle title="Notification Settings" />
    </SafeAreaView>
  );
}
