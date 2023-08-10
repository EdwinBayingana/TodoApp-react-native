import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Task;
