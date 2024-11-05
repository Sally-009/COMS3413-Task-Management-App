import { StyleSheet, TextInput } from "react-native";
import React from "react";

/*
  InputFieldWelcome
  This component is a text input field that is used in the welcome screen.

  Props:
    string placeholder (Required): The placeholder text for the input field.
    string keyboardType (Required): The type of keyboard to display. (email-address -> 'email', password -> 'default')
    bool isSecured (Optional): Whether the input should be obscured.
      Default: false
*/

const InputFieldWelcome = ({placeholder, keyboardType, isSecured = false}) => {
    return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        keyboardType={keyboardType}
        secureTextEntry={isSecured}
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