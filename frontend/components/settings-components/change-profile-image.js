import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ChangeProfileImage = ({ onImageChange }) => {
  const handleSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      onImageChange(result.uri);
      // Handle the save action, e.g., upload the image to the server
      console.log('New Profile Image:', result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
        <Text style={styles.buttonText}>Change Profile Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF', // Button color
    borderRadius: 10, // Rounded corners
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangeProfileImage;