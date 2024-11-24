import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";


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