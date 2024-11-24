import { SafeAreaView, View, StyleSheet } from "react-native";
import React from "react";
import InputFieldTask from "../../../components/tasks-components/input-field-task";
import ToggleItem from "../../../components/tasks-components/toggle-item";
import MainButton from "../../../components/general-use-components/main-button";
import withDarkMode from "../../../components/settings-components/with-dark-mode"; // Import the HOC
import { styles } from "../../styles"; // Import global styles

function CreateTaskPage({ isDarkMode }) { // Receive isDarkMode as a prop
  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <InputFieldTask iconName="edit" placeholder="Task Name" />
      <InputFieldTask iconName="label" placeholder="Task Category" />
      <InputFieldTask
        iconName="subject"
        placeholder="Description"
        height={80}
        alignItems="flex-start"
        multiline={true}
      />
      <ToggleItem iconName="today" text="Due Date" />
      <ToggleItem iconName="schedule" text="Time" />
      <InputFieldTask iconName={"group"} placeholder="Assign to" />
      <View style={[styles.center, isDarkMode && styles.darkCenter]}>
        <MainButton label="Add Task" />
      </View>
    </SafeAreaView>
  );
}

export default withDarkMode(CreateTaskPage);
