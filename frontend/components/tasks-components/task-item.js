import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useDarkMode } from '../../components/settings-components/dark-mode-context';

/**
 * TaskItem Component
 * This component renders a row with a checkbox, text, and a category indicator.
 * It is used in the task list screen for displaying task details.
 */

const TaskItem = ({ taskName, date, categoryColor, taskId }) => {
  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode();

  const handlePress = () => {
    console.log("Navigating to TaskDetailPage... Task ID: ", taskId);
    navigation.navigate('TaskDetailPage', { taskId });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={[styles.categoryIndicator, { backgroundColor: categoryColor }]} />
      <View style={styles.textContainer}>
        <Text style={[styles.taskName, isDarkMode && styles.darkText]}>{taskName}</Text>
        {date && <Text style={[styles.date, isDarkMode && styles.darkText]}>{date}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  darkContainer: {
    backgroundColor: "#666666", // Light gray background for dark mode
  },
  categoryIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  taskName: {
    fontSize: 16,
    color: "black", // Default text color
  },
  date: {
    fontSize: 14,
    color: "gray", // Default date color
  },
  darkText: {
    color: "#FFFFFF", // White text for dark mode
  },
});

export default TaskItem;