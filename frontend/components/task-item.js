import { View, Text, StyleSheet } from "react-native";
import { Checkbox } from "expo-checkbox";
import React from "react";

// TaskItem component 
// This is used as a format for displaying a task in a task list.

// Props:
// - isCompleted: The completion status of the task (true for completed, false for not completed)
// - taskName: The name of the task
// - description: The description of the task
// - categoryColor: The color representing the task's category. This color is used for the right border of the task item.
// - onCheckBoxChange: A function that is called when the checkbox state changes. It receives the new state (true/false) as an argument.

const TaskItem = ({
  isCompleted,
  taskName,
  description,
  categoryColor,
  onCheckBoxChange,
}) => {
  return (
    <View style={styles.itemContainer}>
      <Checkbox
        style={styles.checkBox}
        value={isCompleted}
        onValueChange={onCheckBoxChange}
      />
      <View style={styles.textColumn}>
        <Text style={styles.taskName}>{taskName}</Text>
        <Text style={styles.taskDescription}>{description}</Text>
      </View>
      <View
        style={[styles.categoryIndicator, { backgroundColor: categoryColor }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    maxWidth: 500,
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  categoryIndicator: {
    width: 10,
    height: "100%",
  },
  checkBox: {
    width: 20,
    height: 20,
    margin: 10,
  },
  textColumn: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  taskName: {
    fontSize: 16,
  },
  taskDescription: {
    fontSize: 14,
    color: "gray",
  },
});

export default TaskItem;