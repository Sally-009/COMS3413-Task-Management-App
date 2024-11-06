import { View, Text, StyleSheet } from "react-native";
import { Checkbox } from "expo-checkbox";
import React from "react";

/*
    TaskItem
    This component is used as a format of a task item in the task list.

    Props:
        boolean isCompleted: The status of the task. 
        string taskName: The name of the task.
        string description: The description of the task.
        string categoryColor: The color of the category of the task.
        function onCheckBoxChange: Place setter function for the isCompleted state in the parent component.
*/

const TaskItem = ({ isCompleted, taskName, description, categoryColor, onCheckBoxChange}) => {

  // Set the state of the checkbox
  const handleCheckBox = () => {
    onCheckBoxChange(!isCompleted);
  };

    return (
      <View style={[styles.itemContainer, {borderRightColor: categoryColor}]}>
        <Checkbox
          style={styles.checkBox}
          value={isCompleted}
          onValueChange={handleCheckBox}
        />
        <View style={styles.textColumn}>
          <Text style={styles.taskName}>{taskName}</Text>
          <Text style={styles.taskDescription}>{description}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 10,

    width: "98%",
    height: 50,
    borderRightWidth: 10,
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