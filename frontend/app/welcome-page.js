import React from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";
import SubmitButtonWelcome from "../components/submit-button-welcome";
import { LinearGradient } from "expo-linear-gradient";

/*
    Welcome Page
    This page is the first page that the user sees when they open the app.
    It contains a logo, a login button, and a register button.
*/

export default function WelcomePage({navigation}) {

  const imagePath = require("../assets/images/logo.jpg");
  const gradientColors = ["#121EB9", "#FFFFFF"];

  // navigate to pages
  function navigateTo(page) {
    return function() {
      navigation.navigate(page);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={gradientColors} style={styles.container}>
        <Image source={imagePath} style={styles.logo} />

        <SubmitButtonWelcome title="Login" onPress={navigateTo("login-page")} />

        <SubmitButtonWelcome
          title="Register"
          onPress={navigateTo("register-page")}
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
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
});