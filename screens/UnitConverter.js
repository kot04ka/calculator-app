import React, { useState, useMemo, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useQuery } from '@tanstack/react-query';

// Функція для отримання даних із API
const fetchUnitConversions = async () => {
  const response = await fetch('https://my-json-server.typicode.com/kot04ka/calculator-api/unitConversions');
  if (!response.ok) {
    throw new Error('Failed to fetch unit conversions');
  }
  return response.json();
};

export default function UnitConverter({ navigation }) {
  const [unitType, setUnitType] = useState('length');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  // Використання useQuery для отримання даних
  const { data: unitData, isLoading, error } = useQuery({
    queryKey: ['unitConversions'], // Ключ для кешування
    queryFn: fetchUnitConversions, // Функція для виконання запиту
  });

  // Оновлення доступних одиниць при зміні типу
  useEffect(() => {
    if (unitData && unitData[unitType]) {
      setFromUnit(unitData[unitType].units[0]);
      setToUnit(unitData[unitType].units[1]);
    }
  }, [unitType, unitData]);

  // Обробка конвертації одиниць
  const handleConversion = () => {
    if (!unitData || !unitData[unitType]) return;

    const val = parseFloat(value);

    if (isNaN(val)) {
      alert('Будь ласка, введіть коректне значення.');
      return;
    }

    let convertedValue;
    const rate = unitData[unitType].conversions[fromUnit][toUnit];
    convertedValue = (val * rate).toFixed(2);

    setResult(convertedValue);
  };

  // Обробка стану завантаження та помилок
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
      <Text style={styles.title}>Конвертер одиниць</Text>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Тип:</Text>
        <Picker
          selectedValue={unitType}
          style={styles.picker}
          onValueChange={(itemValue) => setUnitType(itemValue)}
        >
          {unitData &&
            Object.keys(unitData).map((type) => (
              <Picker.Item label={type} value={type} key={type} />
            ))}
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Значення"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>З:</Text>
        <Picker
          selectedValue={fromUnit}
          style={styles.picker}
          onValueChange={(itemValue) => setFromUnit(itemValue)}
        >
          {unitData &&
            unitData[unitType]?.units.map((unit) => (
              <Picker.Item label={unit} value={unit} key={unit} />
            ))}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>До:</Text>
        <Picker
          selectedValue={toUnit}
          style={styles.picker}
          onValueChange={(itemValue) => setToUnit(itemValue)}
        >
          {unitData &&
            unitData[unitType]?.units.map((unit) => (
              <Picker.Item label={unit} value={unit} key={unit} />
            ))}
        </Picker>
      </View>
      <TouchableOpacity style={styles.convertButton} onPress={handleConversion}>
        <Text style={styles.buttonText}>Конвертувати</Text>
      </TouchableOpacity>
      {result !== null && (
        <Text style={styles.result}>
          Результат: {result} {toUnit}
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
    backgroundColor: '#f0fff0',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  pickerLabel: {
    fontSize: 18,
    width: 80,
  },
  picker: {
    flex: 1,
    height: 50,
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#fff',
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
