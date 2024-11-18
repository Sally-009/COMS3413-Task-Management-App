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

const addFriendButton = ({ title = "Submit", onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Add Friend</Text>
    </TouchableOpacity>
  );
};

// styles
const styles = StyleSheet.create({
  button: {
    height: 33,
    margin: 10,
    borderColor: "transparent",
    borderRadius: 13,
    borderWidth: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#49B583",
    maxWidth: 100,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",   
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

// export
export default addFriendButton;