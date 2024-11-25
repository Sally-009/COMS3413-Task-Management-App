import { SafeAreaView, View, Text } from "react-native";
import React, {useState, useEffect} from "react";
import { SafeAreaView, View } from "react-native";
import React from "react";
import { styles } from "../../styles";
import { DarkModeProvider, useDarkMode } from '../../../components/settings-components/dark-mode-context';

// import components
import TaskDetailItem from "../../../components/tasks-components/task-detail-item";
import fetchTasks from "../../services/task-service";

function TaskDetailPage() {
  const route = useRoute();
  const { taskId } = route.params;
  const isDarkMode = useDarkMode();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading tasks...");

  const getTaskDetails = async () => {
    try {
      const taskData = await fetchTasks(); // Fetch all tasks
      const foundTask = taskData.find((task) => task._id === taskId);

      // debug
      console.log("Task ID: ", taskId);
      console.log("Found task: ", foundTask);

      if (foundTask) {
        setTask(foundTask);
        setMessage(""); 
      } else {
        setMessage("Task not found");
      }
    } catch (error) {
      setMessage("Error fetching task details");
      console.error(
        "Error fetching task details: ",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  // Fetch tasks on component mount
  useEffect(() => {
    getTaskDetails(); // Call the function
  }, [taskId]);

  // Error handling
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{message}</Text>
      </SafeAreaView>
    );
  }

  // Error handling
  if (!task) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.contentContainer}>
        <Text>{message}</Text>
        <Text>Task ID: {task._id}</Text>
        <TaskDetailItem iconName="title" text={task.taskName} />
        <TaskDetailItem iconName="label" text="{Category Name}" />
        <TaskDetailItem iconName="today" text="{Date}" />
        <TaskDetailItem iconName="subject" text={task.description} />
      </View>
    </SafeAreaView>
  );
}

const App = () => (
  <DarkModeProvider>
    <TaskDetailPage />
  </DarkModeProvider>
);

export default App;