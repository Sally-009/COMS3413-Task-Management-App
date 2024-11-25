import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

/**
 * LogoutButton component
 * 
 * This component is used to display a logout button
 * TODO: Implement logout functionality
 * 
 * @returns {JSX.Element} LogoutButton component
 */

const LogoutButton = () => {

  // Use Navigation
  const navigation = useNavigation();

  // logout functionality
  const logout = () => {
    // Remove token
    localStorage.removeItem("token");
    // Navigate to top page
    navigation.navigate("welcome-page");

    console.log("Logout Successful");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={() => logout()}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  );
};

// styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#EC221F",
    width: "30%",
    maxWidth: 180,
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
export default LogoutButton;
