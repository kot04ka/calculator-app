// screens/CurrencyConverter.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CurrencyConverter({ navigation }) {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, UAH: 27.5, GBP: 0.75 },
    EUR: { USD: 1.18, EUR: 1, UAH: 32.3, GBP: 0.88 },
    UAH: { USD: 0.036, EUR: 0.031, UAH: 1, GBP: 0.027 },
    GBP: { USD: 1.33, EUR: 1.14, UAH: 36.6, GBP: 1 },
  };

  const currencies = Object.keys(exchangeRates);

  const handleConversion = () => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = parseFloat(amount) * rate;

    if (isNaN(convertedAmount)) {
      alert('Будь ласка, введіть коректну суму.');
      return;
    }

    setResult(convertedAmount.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Конвертер валют</Text>
      <TextInput
        style={styles.input}
        placeholder="Сума"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>З:</Text>
        <Picker
          selectedValue={fromCurrency}
          style={styles.picker}
          onValueChange={(itemValue) => setFromCurrency(itemValue)}
        >
          {currencies.map((currency) => (
            <Picker.Item label={currency} value={currency} key={currency} />
          ))}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>До:</Text>
        <Picker
          selectedValue={toCurrency}
          style={styles.picker}
          onValueChange={(itemValue) => setToCurrency(itemValue)}
        >
          {currencies.map((currency) => (
            <Picker.Item label={currency} value={currency} key={currency} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity style={styles.convertButton} onPress={handleConversion}>
        <Text style={styles.buttonText}>Конвертувати</Text>
      </TouchableOpacity>
      {result !== null && (
        <Text style={styles.result}>
          Результат: {result} {toCurrency}
        </Text>
      )}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Домашня сторінка')}
      >
        <Text style={styles.homeButtonText}>Повернутися на домашню сторінку</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Стили аналогічні попереднім, додамо стилі для Picker та кнопки конвертації
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff0f5',
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
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  pickerLabel: {
    fontSize: 18,
    width: 50,
  },
  picker: {
    flex: 1,
    height: 50,
  },
  convertButton: {
    backgroundColor: '#1890ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
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
