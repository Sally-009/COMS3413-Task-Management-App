import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { styles } from "../styles";
import Subtitle from "../../components/general-use-components/subtitle";
import TaskItem from "../../components/tasks-components/task-item";
import FabCreateTask from "../../components/general-use-components/fab-create-task";
import { DarkModeProvider, useDarkMode } from '../../components/settings-components/dark-mode-context';

function TaskListPage() {
  const { isDarkMode } = useDarkMode();
  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Subtitle title="No Date" />
      <TaskItem taskName="Task 1" categoryColor="lightblue" taskId="1" />
      <TaskItem taskName="Task 2" categoryColor="orange" taskId="2" />
      <Subtitle title="Today" />
      <TaskItem taskName="Task 3" date="November 12" categoryColor="lightblue" taskId="3" />
      <TaskItem taskName="Task 4" date="November 12" categoryColor="orange" taskId="4" />
      <Subtitle title="Others" />
      <TaskItem taskName="Task 5" date="November 13" categoryColor="lightcoral" taskId="5" />
      <TaskItem taskName="Task 6" date="November 13" categoryColor="orange" taskId="6" />
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