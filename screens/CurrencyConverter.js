import React, { useState, useMemo } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useQuery } from '@tanstack/react-query';

// Функція для отримання курсів валют із API
const fetchExchangeRates = async () => {
  const response = await fetch('https://my-json-server.typicode.com/kot04ka/calculator-api/exchangeRates');
  if (!response.ok) {
    throw new Error('Не вдалося завантажити курси валют');
  }
  return response.json();
};

export default function CurrencyConverter({ navigation }) {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  // Використання useQuery для отримання даних
  const { data: exchangeRates, isLoading, error } = useQuery({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
  });

  // Формуємо список доступних валют
  const currencies = useMemo(
    () => (exchangeRates ? Object.keys(exchangeRates) : []),
    [exchangeRates]
  );

  // Обробка конвертації валют
  const handleConversion = () => {
    if (!exchangeRates) return;

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = parseFloat(amount) * rate;

    if (isNaN(convertedAmount)) {
      alert('Будь ласка, введіть коректну суму.');
      return;
    }

    setResult(convertedAmount.toFixed(2));
  };

  // Відображення стану завантаження або помилок
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Завантаження даних...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Помилка завантаження: {error.message}</Text>
      </View>
    );
  }

  // Основний рендер компоненту
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
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.homeButtonText}>Повернутися на домашню сторінку</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
