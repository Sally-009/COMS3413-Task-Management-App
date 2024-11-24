import React from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';
import { useDarkMode } from './dark-mode-context';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <View style={styles.container}>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 10,
  },
});

export default DarkModeToggle;