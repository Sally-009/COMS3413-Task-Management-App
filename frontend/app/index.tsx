import { Text, View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

import InputFieldTask from "../components/input-field-task";
import TaskItem from "../components/task-item";

export default function Index() {
  // State management
  const [isCompleted, setIsCompleted] = useState(false);
  const [taskName, setTaskName] = useState("");

  // Function to handle task name changes
  const onChangeText = (text: string) => {
    setTaskName(text);
  };

  // Function to handle checkbox state changes
  const onCheckBoxChange = (value: boolean) => {
    setIsCompleted(value);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <InputFieldTask
        iconName={"edit"}
        value={taskName}
        onChangeText={onChangeText}
        placeholder={"Enter task name"}
      />

      <InputFieldTask
        iconName={"label"}
        value={taskName}
        onChangeText={onChangeText}
        placeholder={"Enter task category"}
      />

      <InputFieldTask
        iconName={"subject"}
        value={taskName}
        onChangeText={onChangeText}
        placeholder={"Enter task description"}
        height={100}
        multiline={true}
        alignItems="flex-start"
      />

      <TaskItem
        isCompleted={isCompleted}
        taskName="Task 1"
        description={"This is a test!"}
        categoryColor="blue"
        onCheckBoxChange={onCheckBoxChange}
      />
    </View>
  );
}
