import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

/**
 * TaskItem Component
 * This component renders a row with a checkbox, text, and a category indicator.
 * It is used in the task list screen for displaying task details.
 */

const TaskItem = ({ taskName, date, categoryColor, taskId }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('TaskDetailPage', { taskId }); // Ensure the screen name matches
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={[styles.categoryIndicator, { backgroundColor: categoryColor }]} />
      <View style={styles.textContainer}>
        <Text style={styles.taskName}>{taskName}</Text>
        {date && <Text style={styles.date}>{date}</Text>}
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
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#888",
  },
});

export default TaskItem;