import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { useDarkMode } from '../../components/settings-components/dark-mode-context';

const InputFieldSocial = (props) => {
  const { isDarkMode } = useDarkMode();

  return (
    <TextInput
      style={[styles.input, isDarkMode && styles.darkInput]}
      placeholderTextColor={isDarkMode ? "lightgray" : "gray"}
      {...props}
    />
  );
};

// styles
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderColor: "black",
    borderRadius: 0,
    borderWidth: 2,
    padding: 10,
    backgroundColor: "white",
    color: "black", // Default text color
    maxWidth: 250,
    width: "50%",
  },
  darkInput: {
    borderColor: "#FFFFFF", // White border for dark mode
    backgroundColor: "#333333", // Dark gray background for dark mode
    color: "#FFFFFF", // White text for dark mode
  },
});

export default InputFieldSocial;