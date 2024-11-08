import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const gradientColors = ["#121EB9", "#FFFFFF"];

export default function LoginPage({ navigation }) {
  const imagePath = require("../assets/images/logo.jpg");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log("Login button pressed");
  }

  function navigateToWelcome() {
    if (navigation && typeof navigation.navigate === 'function') {
      navigation.navigate('WelcomePage');
    } else {
      console.error("Navigation prop is not passed correctly.");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Go Back" onPress={navigateToWelcome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: gradientColors[1],
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#121EB9',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});