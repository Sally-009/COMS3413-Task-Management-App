import { SafeAreaView, View } from "react-native";
import React from "react";
import { styles } from "../../styles";

// import components
import TaskDetailItem from "../../../components/tasks-components/task-detail-item";
import withDarkMode from "../../../components/settings-components/with-dark-mode"; // Import the HOC

function TaskDetailPage({ isDarkMode }) { // Receive isDarkMode as a prop
  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={[styles.contentContainer, isDarkMode && styles.darkContentContainer]}>
        <TaskDetailItem iconName="label" text="Personal" />
        <TaskDetailItem iconName="today" text="12/28/2024" />
        <TaskDetailItem iconName="subject" text="This is a description" />
      </View>
    </SafeAreaView>
  );
}

export default withDarkMode(TaskDetailPage);