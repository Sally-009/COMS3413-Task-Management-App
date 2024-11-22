import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { styles } from "../../styles";
import { useRoute } from '@react-navigation/native';

// import components
import TaskDetailItem from "../../../components/task-detail-item";

export default function TaskDetailPage() {
  const route = useRoute();
  const { taskId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>Task ID: {taskId}</Text>
        <TaskDetailItem iconName="label" text="Personal" />
        <TaskDetailItem iconName="today" text="12/28/2024" />
        <TaskDetailItem iconName="subject" text="This is a description" />
      </View>
    </SafeAreaView>
  );
}