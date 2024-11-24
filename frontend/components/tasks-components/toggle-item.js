import Icon from "react-native-vector-icons/MaterialIcons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Switch } from "react-native-paper";

/**
 * ToggleItem Component
 * This component renders a row with an icon, text, and a toggle switch.
 * It is used in task creation/edit screen for toggling due and time.
 * 
 * Usage example:
 * 
 * <ToggleItem
 *  iconName={"access-time"} // Icon for the item
 * text={"Set due date"} // Text for the item
 * onPress={handleDueDate} // Handler for due date
 * />
 * 
 * @param {Object} props - Component props
 * @param {string} props.iconName - Icon name
 * @param {string} props.text - Text for the item
 * @param {function} props.onPress - Handler for the item
 * @returns {JSX.Element} ToggleItem component
 */

const ToggleItem = ({ iconName, text, onPress }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onPressFunction = () => {
    if (isEnabled && onPress) {
      onPress();
    }
    else {
        // enable the switch
        setIsEnabled(true);
        onPress();
    }
  };

  return (
    <View style={styles.rowContainer}>
      <Icon name={iconName} size={24} color="#5f6368" style={styles.icon} />
      <TouchableOpacity style={styles.touchable} onPress={onPressFunction}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <Switch
        trackColor={{ false: "#767577", true: "#49B583" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 50,
  },
  icon: {
    marginRight: 10,
  },
  touchable: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: "#007AFF",
    padding: 10,
  },
  switch: {
    marginLeft: 10,
  },
});

export default ToggleItem;