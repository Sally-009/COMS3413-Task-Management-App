import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

/*
    SubmitButtonWelcome
    This component is a button that is used in the welcome screen.

    Props:
        string title (Optional): The text to display on the button. 
            Default: "Submit".
        function onPress (Optional): The function to call when the button is pressed. 
            Default: Show "Submit button pressed." to the console.
*/

const SubmitButtonWelcome = ({ title = "Submit", onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    width: "30%",
    maxWidth: 180,
    height: 50,
    padding: 10,
    margin: 10,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

// export
export default SubmitButtonWelcome;