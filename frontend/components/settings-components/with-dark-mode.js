// FILE: withDarkMode.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useDarkMode } from './dark-mode-context';

const withDarkMode = (WrappedComponent) => {
  return (props) => {
    const { isDarkMode } = useDarkMode();

    return (
      <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
        <WrappedComponent {...props} isDarkMode={isDarkMode} />
      </SafeAreaView>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#000000',
  },
});

export default withDarkMode;