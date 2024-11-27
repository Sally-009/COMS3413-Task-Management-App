import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useDarkMode } from '../../components/settings-components/dark-mode-context';

const FriendDetailItem = ({ username }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Image
        source={require('../../assets/images/favicon.png')}
        style={styles.profileImage}
      />
      <Text style={[styles.username, isDarkMode && styles.darkUsername]}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: "white", // Default background color
  },
  darkContainer: {
    backgroundColor: "#333333", // Dark gray background for dark mode
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    color: "black", // Default text color
  },
  darkUsername: {
    color: "#FFFFFF", // White text for dark mode
  },
});

export default FriendDetailItem;