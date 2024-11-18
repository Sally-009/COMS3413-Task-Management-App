// Styles used in main pages
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  socialInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  friendItem: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'space-between', // Space between items
    alignItems: 'center', // Center items vertically
    paddingRight: 10,
  },
});
