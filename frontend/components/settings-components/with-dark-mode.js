// FILE: withDarkMode.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useDarkMode } from './dark-mode-context';
import { darkTheme, lightTheme } from '../../app/themes'; // Adjust the import path as needed

const withDarkMode = (WrappedComponent) => {
  return (props) => {
    const { isDarkMode } = useDarkMode();
    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <WrappedComponent {...props} isDarkMode={isDarkMode} theme={theme} />
      </SafeAreaView>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withDarkMode;