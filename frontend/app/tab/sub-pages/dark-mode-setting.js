import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DarkModePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dark Mode Setting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DarkModePage;