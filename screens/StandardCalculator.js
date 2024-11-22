// screens/StandardCalculator.js

import React, { useState, useCallback, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function StandardCalculator({ navigation }) {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = useCallback(
    (operation) => {
      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(secondNumber);

      if (isNaN(num1) || isNaN(num2)) {
        alert('Будь ласка, введіть коректні числа.');
        return;
      }

      let res = 0;
      switch (operation) {
        case '+':
          res = num1 + num2;
          break;
        case '-':
          res = num1 - num2;
          break;
        case '*':
          res = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            alert('Ділення на нуль неможливе.');
            return;
          }
          res = num1 / num2;
          break;
        default:
          return;
      }

      setResult(res);
    },
    [firstNumber, secondNumber]
  );

  useEffect(() => {
    if (result !== null) {
      console.log(`Результат: ${result}`);
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Стандартний калькулятор</Text>
      <TextInput
        style={styles.input}
        placeholder="Перше число"
        keyboardType="numeric"
        value={firstNumber}
        onChangeText={setFirstNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Друге число"
        keyboardType="numeric"
        value={secondNumber}
        onChangeText={setSecondNumber}
      />
      <View style={styles.buttonContainer}>
        {['+', '-', '*', '/'].map((op) => (
          <TouchableOpacity
            key={op}
            style={styles.calcButton}
            onPress={() => handleCalculation(op)}
          >
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {result !== null && <Text style={styles.result}>Результат: {result}</Text>}
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.homeButtonText}>Повернутися на домашню сторінку</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6f7ff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  calcButton: {
    backgroundColor: '#1890ff',
    padding: 15,
    borderRadius: 5,
    width: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  result: {
    fontSize: 24,
    marginVertical: 20,
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#52c41a',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
