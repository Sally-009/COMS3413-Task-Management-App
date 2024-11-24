import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const MainButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

// styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#49B583",
    width: "80%",
    height: 50,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

// export
export default MainButton;
