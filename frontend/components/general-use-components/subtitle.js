import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";

/**
 * Subtitle component
 * 
 * This component is used to display a subtitle
 * 
 * @param {string} title - The title of the subtitle
 * @returns {JSX.Element} Subtitle component
 * @example
 * <Subtitle title="Your Tasks" />
 */

export default function Subtitle({ title }) {
    return (
        <View style={styles.item}>
          <Text style={styles.text}>{title}</Text>
          <Divider />             
        </View>
    )};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    padding: 5,
  },
});
