import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BlogList from './src/screens/BlogList';

export default function App() {
  return (
    <View style={styles.container}>
      <BlogList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafb',
    padding: 10
  },
});
