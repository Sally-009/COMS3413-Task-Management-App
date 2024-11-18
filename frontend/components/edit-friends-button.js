import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const EditFriendsButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Edit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end', // Aligns the button to the right side
    marginHorizontal: 10,
    marginVertical: -20,
    borderColor: "transparent",
    borderRadius: 13,
    borderWidth: 0,
    paddingHorizontal: 15, // Adjusted to fit the text
    paddingVertical: 5,
    backgroundColor: "#F60606",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default EditFriendsButton;