import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Subtitle from "../../components/general-use-components/subtitle";
import TaskItem from "../../components/tasks-components/task-item";
import withDarkMode from "../../components/settings-components/with-dark-mode"; // Import the HOC
import { styles } from "../styles";
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
  return (
    <>
      <Subtitle title="Your Tasks" />
      <TaskItem
        taskName="Task 1"
        date={"10/2/2024"}
        categoryColor={"lightblue"}
        taskId="1" 
      />
      <TaskItem
        taskName="Task 2"
        date={"10/2/2024"}
        categoryColor={"lightgreen"}
        taskId="2" 
      />
      <TaskItem
        taskName="Task 3"
        date={"10/5/2024"}
        categoryColor={"lightcoral"}
        taskId="3" 
      />
    </>
  );
}

export default withDarkMode(HomePage); // Wrap the component with the HOC