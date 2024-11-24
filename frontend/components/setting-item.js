import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

/**
 * SettingItem component
 * 
 * TODO: Add onPress functionality
 * 
 * @param {string} name - name of the setting
 * @param {function} onPress - function to call when the setting is pressed
 */

export default function SettingItem({ name, onPress }) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
        <Icon name="chevron-right" size={28} />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ECEFEE",
    height: 35,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    padding: 5,
  },
});