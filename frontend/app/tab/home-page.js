import React from "react";
import { SafeAreaView, View } from "react-native";
import { useEffect } from "react";

import Subtitle from "../../components/general-use-components/subtitle";
import TaskItem from "../../components/tasks-components/task-item";
import { styles } from "../styles";
import { DarkModeProvider, useDarkMode } from '../../components/settings-components/dark-mode-context';

/**
 * HomePage component
 * 
 * This component is used to display the home page
 * 
 * TODO: Add tasks to display
 * 
 * @returns {JSX.Element} HomePage component
 */

function HomePage() {
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    console.log("Dark mode is now:", isDarkMode);
  }, [isDarkMode]);
  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Subtitle title="Your Tasks" />
      <TaskItem taskName="Task 1" date={"10/2/2024"} categoryColor={"lightblue"} taskId="1" />
      <TaskItem taskName="Task 2" date={"10/2/2024"} categoryColor={"lightgreen"} taskId="2" />
      <TaskItem taskName="Task 3" date={"10/5/2024"} categoryColor={"lightcoral"} taskId="3" />
    </View>
  );
}

const App = () => (
  <DarkModeProvider>
    <HomePage />
  </DarkModeProvider>
);

export default App;