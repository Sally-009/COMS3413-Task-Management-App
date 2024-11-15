import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

/**
 * InputFieldTask Component
 * This component renders a text input field with an icon for use in the task creation/edit screen.
 * It is used for capturing task details such as task name, description, category, assignee, etc.
 * 
 * Usage examples:
 * 
 * 1. For entering the task name or category:
 *    <InputFieldTask
 *      iconName={"edit"} // Icon for task name or category
 *      value={taskName}  // The task name input value
 *      onChangeText={onChangeText}  // Handler for text input changes
 *      placeholder={"Enter task name"} // Placeholder text
 *    />
 * 
 * 2. For entering the task description:
 *    <InputFieldTask
 *      iconName={"subject"} // Icon for description
 *      value={taskName}  // The description input value
 *      onChangeText={onChangeText}  // Handler for text input changes
 *      placeholder={"Enter task description"} // Placeholder text
 *      height={100}  // Adjust height (default is 40)
 *      multiline={true} // Enable multi-line input
 *      alignItems="flex-start" // Align icon at the top
 *    />
 */

const InputFieldTask = ({
  iconName,
  height = 40,
  alignItems = "center",
  ...props
}) => {
  return (
    <View style={[styles.itemContainer, {alignItems: alignItems}]}>
      {/* alignItems = "flex-start" for description */}
      <Icon name={iconName} size={24} color="#5f6368" style={styles.icon} />
      <TextInput
        style={[styles.input, { height: height }]}
        placeholderTextColor="gray"
        multiline={false} // change to true for description
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#f1f5fa",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    maxWidth: 500,
  },
  icon: {
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    paddingLeft: 10,
    flex: 1,
    borderWidth: 0,
  },
});

export default InputFieldTask;