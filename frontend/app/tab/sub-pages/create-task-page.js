import { SafeAreaView, View } from "react-native";
import React from "react";
import { styles } from "../../styles";

// TODO: Adjust styles

// import components
import InputFieldTask from "../../../components/input-field-task";
import ToggleItem from "../../../components/toggle-item";
import MainButton from "../../../components/main-button";

export default function CreateTaskPage() {
    return (
      <SafeAreaView style={styles.container}>
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

        <View styles={styles.center}>
            <MainButton label="Add Task" />
        </View>
      </SafeAreaView>
    );
}

