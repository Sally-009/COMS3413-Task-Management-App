import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';

const TaskDetailItem = ({ iconName, text, taskId }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('TaskDetails', { taskId });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.rowContainer}>
      <Icon name={iconName} size={24} color="#5f6368" style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
    marginHorizontal: 30,
  },
  icon: {
    paddingRight: 20,
  },
  text: {
    fontSize: 16,
  },
});

export default TaskDetailItem;