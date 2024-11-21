import { SafeAreaView, View } from "react-native";
import React from "react";
import { styles } from "../../styles";

// import components
import TaskDetailItem from "../../../components/task-detail-item";

export default function TaskDetailPage() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <TaskDetailItem iconName="label" text="Personal" />
          <TaskDetailItem iconName="today" text="12/28/2024" />
          <TaskDetailItem iconName="subject" text="This is a description" />
        </View>
      </SafeAreaView>
    );
}

