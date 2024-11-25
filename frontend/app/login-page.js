import React, { useState } from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";
import SubmitButtonWelcome from "../components/submit-button-welcome";
import InputFieldWelcome from "../components/input-field-welcome";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { Alert } from "react-native";

/*
    Login Page
    This page will allow the user to login to their account in the application
    It contains a logo, two input fields, and a log in button
*/

export default function WelcomePage({ navigation }) {
  const imagePath = require("../assets/images/logo.jpg");
  const gradientColors = ["#121EB9", "#FFFFFF"];

  const [username, setUsername] = useState("");
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

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        username,
        password,
      });

      // Successful login
      console.log("Login successful:", response.data); 
      navigation.navigate("tab-navigator"); 

    } catch (error) {
      console.error("Login failed:", error);
      Alert.alert("Error", "Login failed. Please check your credentials.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={gradientColors} style={styles.container}>
        <Image source={imagePath} style={styles.logo} />

        <InputFieldWelcome
          placeholder="Username"
          keyboardType="default"
          value={username} // Add value prop
          onChangeText={setUsername} // Add onChangeText prop
        />
        <InputFieldWelcome 
          placeholder="Password" 
          keyboardType="default" 
          secureTextEntry={true} // Add secureTextEntry prop
          value={password} // Add value prop
          onChangeText={setPassword} // Add onChangeText prop
        />
        <SubmitButtonWelcome
          title="Login"
          onPress={handleLogin} // Call handleLogin on press
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