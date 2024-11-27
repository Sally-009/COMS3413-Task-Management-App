import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import { useDarkMode } from '../../components/settings-components/dark-mode-context';

/**
 * Subtitle component
 * 
 * This component is used to display a subtitle
 * 
 * @param {string} title - The title of the subtitle
 * @returns {JSX.Element} Subtitle component
 * @example
 * <Subtitle title="Your Tasks" />
 */

export default function Subtitle({ title }) {
  const { isDarkMode } = useDarkMode();

  return (
    <View style={[styles.item, isDarkMode && styles.darkItem]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>{title}</Text>
      <Divider style={isDarkMode && styles.darkDivider} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
  },
  darkItem: {
    backgroundColor: "#333333", // Dark gray background for dark mode
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    padding: 5,
  },
  darkText: {
    color: "#FFFFFF", // White text for dark mode
  },
  darkDivider: {
    backgroundColor: "#FFFFFF", // White divider for dark mode
  },
});
