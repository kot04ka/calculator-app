// screens/HomeScreen.js

import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    console.log('Домашня сторінка завантажена');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мій Калькулятор</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StandardCalculator')}
      >
        <Text style={styles.buttonText}>Стандартний калькулятор</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CurrencyConverter')}
      >
        <Text style={styles.buttonText}>Конвертер валют</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UnitConverter')}
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
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#1890ff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
