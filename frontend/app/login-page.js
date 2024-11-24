import React, { useState } from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";
import SubmitButtonWelcome from "../components/welcome-components/submit-button-welcome";
import InputFieldWelcome from "../components/welcome-components/input-field-welcome";
import { LinearGradient } from "expo-linear-gradient";

/*
    Login Page
    This page will allow the user to login to their account in the application
    It contains a logo, two input fields, and a log in button
*/

export default function WelcomePage({ navigation }) {
  const imagePath = require("../assets/images/logo.jpg");
  const gradientColors = ["#121EB9", "#FFFFFF"];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // navigate to pages
  function navigateTo(page) {
    return function() {
      if (navigation && typeof navigation.navigate === 'function') {
        navigation.navigate(page);
      } else {
        console.error("Navigation prop is not passed correctly.");
      }
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={gradientColors} style={styles.container}>
        <Image source={imagePath} style={styles.logo} />
        <InputFieldWelcome
          placeholder="Username"
          keyboardType="email-address"
        />
        <InputFieldWelcome placeholder="Password" keyboardType="default" />
        <SubmitButtonWelcome
          title="Login"
          onPress={navigateTo("tab-navigator")}
        />
        <SubmitButtonWelcome
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
});