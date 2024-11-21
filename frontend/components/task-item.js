import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "expo-checkbox";
import React from "react";

/**
 * TaskItem Component
 * This component renders a row with a checkbox, text, and a category indicator.
 * It is used in the task list screen for displaying task details.
 * 
 * Usage example:
 * 
 * <TaskItem
 * isCompleted={false} // Task completion status
 * taskName={"Task 1"} // Task name
 * date={"10/2/2024"} // Task date
 * categoryColor={"lightblue"} // Task category color
 * onCheckBoxChange={handleCheckBoxChange} // Handler for checkbox change
 * />
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isCompleted - Task completion status
 * @param {string} props.taskName - Task name
 * @param {string} props.date - Task date
 * @param {string} props.categoryColor - Task category color
 * @param {function} props.onCheckBoxChange - Handler for checkbox change
 * @returns {JSX.Element} TaskItem component
 */

const TaskItem = ({
  isCompleted,
  taskName,
  date,
  categoryColor,
  onCheckBoxChange,
  onPressed
}) => {
  return (
    <View style={styles.itemContainer}>
      <Checkbox
        style={styles.checkBox}
        value={isCompleted}
        onValueChange={onCheckBoxChange}
      />
      <TouchableOpacity style={styles.textColumn} onPress={onPressed}>
        <Text style={styles.taskName}>{taskName}</Text>
        <Text style={styles.taskDate}>Date: {date ? date : "NA"}</Text>
      </TouchableOpacity>
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
  taskDate: {
    fontSize: 14,
    color: "gray",
  },
});

export default TaskItem;