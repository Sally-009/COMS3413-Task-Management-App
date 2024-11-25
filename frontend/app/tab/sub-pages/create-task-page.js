import { SafeAreaView, View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "../../styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DarkModeProvider, useDarkMode } from '../../../components/settings-components/dark-mode-context';


// TODO: Adjust styles

// import components
import InputFieldTask from "../../../components/tasks-components/input-field-task";
import ToggleItem from "../../../components/tasks-components/toggle-item";
import MainButton from "../../../components/general-use-components/main-button";

function CreateTaskPage() {

  // Values for each input
  const [taskName, setTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  // Post request to create a task
  const createTask = async () => {
    const task = {
      taskName,
      taskCategory,
      description,
      dueDate,
      time,
    };

    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        console.error("Token is missing");
        return;
      }

      // Await the API call and store the response
      const response = await axios.post("http://localhost:5000/tasks", task, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Check the response status
      if (response.status === 200 || response.status === 201) {
        console.log("Task created successfully");
        setMessage("Task created successfully");
      } else {
        console.error("Failed to create task: ", response.status);
        setMessage("Failed to create task");
      }
    } catch (error) {
      console.error(
        "Error creating task: ",
        error.response?.data || error.message
      );
      setMessage("Error creating task");
    }
  };


  return (
    <SafeAreaView style={styles.container}>

      <Text>{message}</Text>

      <InputFieldTask
        iconName="edit"
        placeholder="Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <InputFieldTask
        iconName="label"
        placeholder="Task Category"
        value={taskCategory}
        onChangeText={setTaskCategory}
      />
      <InputFieldTask
        iconName="subject"
        placeholder="Description"
        height={80}
        alignItems="flex-start"
        multiline={true}
        value={description}
        onChangeText={setDescription}
      />
      <ToggleItem
        iconName="today"
        text="Due Date"
        value={dueDate}
        onChangeText={setDueDate}
      />
      <ToggleItem
        iconName="schedule"
        text="Time"
        value={time}
        onChangeText={setTime}
      />

      <View styles={styles.center}>
        <MainButton label="Add Task" onPress={createTask} />
      </View>
    </SafeAreaView>
  );
}

const App = () => (
  <DarkModeProvider>
    <CreateTaskPage />
  </DarkModeProvider>
);

export default App;
