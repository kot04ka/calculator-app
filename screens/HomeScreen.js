// screens/HomeScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мій Калькулятор</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Стандартний калькулятор')}
      >
        <Text style={styles.buttonText}>Стандартний калькулятор</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Конвертер валют')}
      >
        <Text style={styles.buttonText}>Конвертер валют</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Конвертер одиниць')}
      >
        <Text style={styles.buttonText}>Конвертер одиниць</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#1890ff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
