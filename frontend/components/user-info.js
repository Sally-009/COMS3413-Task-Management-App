import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserInfo = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingHorizontal: 20,
    marginHorizontal: 20, // Add horizontal margin
    backgroundColor: '#d3d3d3', // Light gray color
    borderRadius: 10, // Slightly rounded corners
    justifyContent: 'center', // Center content vertically
    height: 40, // Ensure the container has a fixed height
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});

export default UserInfo;