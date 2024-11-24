import { StyleSheet, TextInput } from "react-native";
import React from "react";

/**
 * InputFieldWelcome
 * This component renders a text input field on the welcome screen.
 * It is designed for collecting user input like email or password during the login/registration process.
 * 
 * @param {string} placeholder - The placeholder text for the input field. (Required)
 * @param {string} keyboardType - The type of keyboard to display.
 *    - "email-address" -> email keyboard
 *    - "password" -> password keyboard (displays a default keyboard)
 * @param {boolean} [isSecured=false] - Whether the input should be obscured (password field).
 *    Default is `false`, meaning the input is not obscured.
 *
 * @example
 * <InputFieldWelcome 
 *   placeholder="Enter your email" 
 *   keyboardType="email-address" 
 *   isSecured={false} 
 * />
 */

const InputFieldWelcome = (props) => {
    return (
      <TextInput
        style={styles.input}
        placeholderTextColor="gray"
        {...props}
      />
    );
};

// styles
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderColor: "gray",
    borderRadius: 50,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    maxWidth: 250,
    width: "50%",
  },
});

export default InputFieldWelcome;