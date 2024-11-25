import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DarkModeProvider, useDarkMode } from '../../../components/settings-components/dark-mode-context';
import DarkModeToggle from '../../../components/settings-components/dark-mode-toggle';

const DarkModePage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>Dark Mode Setting</Text>
      <DarkModeToggle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  darkText: {
    color: '#fff',
  },
});

const App = () => (
  <DarkModeProvider>
    <DarkModePage />
  </DarkModeProvider>
);

export default App;