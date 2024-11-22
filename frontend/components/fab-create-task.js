import React from "react";
import { FloatingAction } from "react-native-floating-action";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

// actions
const actions = [
  {
    text: "Create New Task",
    icon: <Icon name="add" size={24} color="white" />,
    name: "createTask",
    position: 1,
    color: "#5157C7",
  },
  {
    text: "Edit Category",
    icon: <Icon name="edit" size={24} color="white" />,
    name: "editCategory",
    position: 2,
    color: "#5157C7",
  },
];

const FabCreateTask = ({ onPress }) => {

    const navigation = useNavigation();

    const handlePressItem = (name) => {
    if (name === "createTask") {
      navigation.navigate("CreateTaskPage")
    } else if (name === "editCategory") {
      // Handle edit category action
    }
    };

    return (
      <FloatingAction
        actions={actions}
        onPressItem={handlePressItem}
        color="#49B583"
        styles={styles.fabButton}
      />
    );
};

const styles = {
  fabButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    margin: 10,
  },
};

export default FabCreateTask;
