import { SafeAreaView, View } from "react-native";
import React from "react";
import { styles } from "../../styles";
import { DarkModeProvider, useDarkMode } from '../../../components/settings-components/dark-mode-context';

// import components
import TaskDetailItem from "../../../components/tasks-components/task-detail-item";


function TaskDetailPage() { // Receive isDarkMode as a prop
  const { isDarkMode } = useDarkMode();
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

const App = () => (
  <DarkModeProvider>
    <TaskDetailPage />
  </DarkModeProvider>
);

export default App;