import Icon from "react-native-vector-icons/MaterialIcons";
import { View, Text, StyleSheet } from "react-native";

const TaskDetailItem = ({ iconName, text }) => {
    return (
        <View style={styles.rowContainer}>
        <Icon name={iconName} size={24} color="#5f6368" style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
        </View>
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