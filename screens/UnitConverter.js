// screens/UnitConverter.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function UnitConverter({ navigation }) {
  const [unitType, setUnitType] = useState('length');
  const [fromUnit, setFromUnit] = useState('km');
  const [toUnit, setToUnit] = useState('mi');
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const units = {
    length: {
      units: ['km', 'mi', 'm'],
      conversions: {
        km: { km: 1, mi: 0.621371, m: 1000 },
        mi: { km: 1.60934, mi: 1, m: 1609.34 },
        m: { km: 0.001, mi: 0.000621371, m: 1 },
      },
    },
    weight: {
      units: ['kg', 'lb', 'g'],
      conversions: {
        kg: { kg: 1, lb: 2.20462, g: 1000 },
        lb: { kg: 0.453592, lb: 1, g: 453.592 },
        g: { kg: 0.001, lb: 0.00220462, g: 1 },
      },
    },
    temperature: {
      units: ['C', 'F'],
      conversions: {
        C: {
          C: (val) => val,
          F: (val) => (val * 9) / 5 + 32,
        },
        F: {
          C: (val) => ((val - 32) * 5) / 9,
          F: (val) => val,
        },
      },
    },
  };

  const handleConversion = () => {
    const val = parseFloat(value);

    if (isNaN(val)) {
      alert('Будь ласка, введіть коректне значення.');
      return;
    }

    let convertedValue;

    if (unitType === 'temperature') {
      const conversionFunc = units[unitType].conversions[fromUnit][toUnit];
      convertedValue = conversionFunc(val).toFixed(2);
    } else {
      const rate = units[unitType].conversions[fromUnit][toUnit];
      convertedValue = (val * rate).toFixed(2);
    }

    setResult(convertedValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Конвертер одиниць</Text>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Тип:</Text>
        <Picker
          selectedValue={unitType}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setUnitType(itemValue);
            setFromUnit(units[itemValue].units[0]);
            setToUnit(units[itemValue].units[1]);
          }}
        >
          <Picker.Item label="Довжина" value="length" />
          <Picker.Item label="Вага" value="weight" />
          <Picker.Item label="Температура" value="temperature" />
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
          {units[unitType].units.map((unit) => (
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
          {units[unitType].units.map((unit) => (
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
        onPress={() => navigation.navigate('Домашня сторінка')}
      >
        <Text style={styles.homeButtonText}>Повернутися на домашню сторінку</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Стили аналогічні попереднім
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
