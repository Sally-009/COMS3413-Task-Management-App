import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, Text, View, StyleSheet } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles";
import Subtitle from "../../components/general-use-components/subtitle";
import TaskItem from "../../components/tasks-components/task-item";
import FabCreateTask from "../../components/general-use-components/fab-create-task";
import { DarkModeProvider, useDarkMode } from '../../components/settings-components/dark-mode-context';

// import components
import fetchTasks from "../services/task-service";

function TaskListPage() {
  // States
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading tasks...");
  const [isDarkMode] = useDarkMode();

  const getTasks = async () => {
    try {
      const taskData = await fetchTasks(); // Use the fetchTasks function here
      setTasks(taskData); // Set the tasks state
      setMessage(""); // Clear the loading message
    } catch (error) {
      setMessage("Error fetching tasks");
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  // Fetch tasks on component mount
  useEffect(() => {
    getTasks(); // Call the function
  }, []);

  // Render task
  const renderTask = ({ item }) => (
    <TaskItem
      taskName={item.taskName}
      categoryColor="blue"
      date={"NA"}
      taskId={item._id}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>{message}</Text>
      ) : (
        <View>
          <Subtitle title="Tasks" />
          <FlatList
            data={tasks}
            keyExtractor={(item) => item._id.toString()}
            renderItem={renderTask}
          />
        </View>
      )}
      <FabCreateTask />
    </SafeAreaView>
  );
}

const App = () => (
  <DarkModeProvider>
    <TaskListPage />
  </DarkModeProvider>
);

export default App;
