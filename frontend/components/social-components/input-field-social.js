import { StyleSheet, TextInput } from "react-native";
import React from "react";

const InputFieldSocial = (props) => {
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
    borderColor: "black",
    borderRadius: 0,
    borderWidth: 2,
    padding: 10,
    backgroundColor: "white",
    maxWidth: 250,
    width: "50%",
  },
});

export default InputFieldSocial;