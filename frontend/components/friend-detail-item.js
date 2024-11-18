import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const friendDetailItem = ({ username }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/favicon.png')}
        style={styles.profileImage}
      />
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 30,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
  },
});

export default friendDetailItem;