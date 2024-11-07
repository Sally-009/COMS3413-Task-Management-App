import { StyleSheet, TextInput } from "react-native";
import React from "react";

/*
  InputFieldWelcome
  This component is a text input field that is used in the welcome screen.

  Props you want to consider passing:
    placeholder: The placeholder text for the input field.
    keyboardType: The type of keyboard to display. (email-address -> 'email', password -> 'default')
    onChangeText: The function to call when the text input changes.
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