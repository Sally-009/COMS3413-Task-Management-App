import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';

/**
 * SettingItem component
 * 
 * @param {string} name - name of the setting
 * @param {string} navigationTarget - screen to navigate to
 */

export default function SettingItem({ name, navigationTarget }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(navigationTarget);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{name}</Text>
      <Icon name="chevron-right" size={28} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ECEFEE",
    height: 35,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    padding: 5,
  },
});