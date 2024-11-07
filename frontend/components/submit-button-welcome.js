import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

/**
 * SubmitButtonWelcome
 * This component renders a button that is used on the welcome screen for submission actions.
 * It provides a customizable button with a title and an onPress function.
 * 
 * @param {string} [title="Submit"] - The text to display on the button. (Optional)
 *    Default is "Submit".
 * @param {function} [onPress=() => console.log("Submit button pressed.")] - The function to call when the button is pressed. (Optional)
 *    Default is a console log showing "Submit button pressed.".
 *
 * @example
 * <SubmitButtonWelcome 
 *   title="Register" 
 *   onPress={handleSubmit} 
 * />
 */

const SubmitButtonWelcome = ({
  title = "Submit",
  onPress = () => console.log("Submit button pressed."),
}) => {
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