import React, {useState} from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SubmitButtonWelcome from "../components/submit-button-welcome";
import InputFieldWelcome from "../components/input-field-welcome";
import axios from "axios";
import { Alert } from 'react-native';


export default function RegisterPage({ navigation }) {
  const imagePath = require("../assets/images/logo.jpg");
  const gradientColors = ["#121EB9", "#FFFFFF"];

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

   // navigate to pages
   function navigateTo(page) {
    return function () {
      navigation.navigate(page);
    };
  }

  // Backend Api call for registration
  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/users/register", {
        email: email,
        username: username,
        password: password,
      });

      // Handle successful registration (e.g., display success message, navigate)
      console.log("Registration successful:", response.data);
      Alert.alert("Success", "Registration successful!", [
        { text: "OK",
          onPress: () => navigation.navigate('tab-navigator', { screen: 'Home' })
          },
      ]);

    } catch (error) {
      console.error("Registration failed:", error);
      Alert.alert("Error", "Registration failed. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={gradientColors} style={styles.container}>
        <Image source={imagePath} style={styles.logo} />

        <InputFieldWelcome
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <InputFieldWelcome
          placeholder="Username"
          keyboardType="default"
          value={username}
          onChangeText={setUsername}
        />

        <InputFieldWelcome
          placeholder="Password"
          isSecured={true}
          keyboardType="default"
          value={password}
          onChangeText={setPassword}
        />

        <SubmitButtonWelcome
          title="Register"
          onPress={handleRegister}
        />

        <SubmitButtonWelcome
          title="Go Back"
          onPress={navigateTo("welcome-page")}
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