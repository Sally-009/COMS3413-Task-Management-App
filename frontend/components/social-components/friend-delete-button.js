import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FriendDeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Delete</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    paddingRight: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#F60606',
    fontSize: 14,
  },
});

export default FriendDeleteButton;