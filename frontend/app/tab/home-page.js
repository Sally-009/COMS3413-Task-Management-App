import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Subtitle from "../../components/subtitle";
import TaskItem from "../../components/task-item";

/**
 * HomePage component
 * 
 * This component is used to display the home page
 * 
 * TODO: Add tasks to display
 * 
 * @returns {JSX.Element} HomePage component
 */

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});