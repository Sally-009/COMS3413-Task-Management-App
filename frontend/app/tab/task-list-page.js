import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { styles } from "../styles";

// import components
import Subtitle from "../../components/subtitle";
import TaskItem from "../../components/task-item";

export default function TaskListPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Subtitle title="No Date" />
      <TaskItem taskName="Task 1" categoryColor="lightblue" />
      <TaskItem taskName="Task 2" categoryColor="orange" />

      <Subtitle title="Today" />
      <TaskItem
        taskName="Task 3"
        date="November 12"
        categoryColor="lightblue"
      />
      <TaskItem taskName="Task 4" date="November 12" categoryColor="orange" />

      <Subtitle title="Others" />
      <TaskItem
        taskName="Task 5"
        date="November 13"
        categoryColor="lightcoral"
      />
      <TaskItem taskName="Task 6" date="November 13" categoryColor="orange" />
    </SafeAreaView>
  );
}
