import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";
import Subtitle from "../../components/general-use-components/subtitle";
import TaskItem from "../../components/tasks-components/task-item";
import FabCreateTask from "../../components/general-use-components/fab-create-task";
import { useDarkMode } from '../../components/settings-components/dark-mode-context';

const TaskListPage = () => {
  const { isDarkMode } = useDarkMode();
  const [tasks, setTasks] = useState([]); // Initialize tasks as an empty array
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading...");

  const getTasks = async () => {
    try {
      // Fetch tasks from your API or data source
      const fetchedTasks = await fetchTasksFromAPI();
      setTasks(fetchedTasks);
      setLoading(false);
    } catch (error) {
      setMessage("Failed to load tasks");
      setLoading(false);
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
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "#333333", // Dark gray background for dark mode
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
  },
});

export default TaskListPage;
